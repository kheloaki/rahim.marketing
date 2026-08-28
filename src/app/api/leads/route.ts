import { NextResponse } from "next/server";
import { formatLeadMessage, leadSchema, telegramLeadUrl } from "@/lib/leads";
import { persistLead } from "@/lib/store-leads";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Please check the form fields" }, { status: 400 });
  }

  const lead = parsed.data;
  const text = formatLeadMessage(lead);
  const deliveredVia: string[] = [];

  const webhook = process.env.LEADS_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...lead, text, source: "rahim-website" }),
      });
      if (res.ok) deliveredVia.push("webhook");
    } catch {
      // Continue to Telegram / local store
    }
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (token && chatId) {
    try {
      const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text }),
      });
      if (res.ok) deliveredVia.push("telegram");
    } catch {
      // Continue to local store
    }
  }

  const persisted = await persistLead(lead, deliveredVia);

  console.warn("[lead]", {
    type: lead.type,
    email: lead.email,
    stored: persisted.stored,
    deliveredVia: persisted.stored ? [...deliveredVia, "file"] : deliveredVia,
  });

  return NextResponse.json({
    ok: true,
    stored: persisted.stored,
    delivered: deliveredVia.includes("webhook") || deliveredVia.includes("telegram") || persisted.stored,
    telegramUrl: telegramLeadUrl(lead),
  });
}
