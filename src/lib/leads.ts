import { z } from "zod";
import { TELEGRAM_URL } from "@/lib/site";

export const leadSchema = z.object({
  type: z.enum(["request-access", "seo-report", "playbook"]),
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(160),
  phone: z.string().trim().max(40).optional(),
  company: z.string().trim().max(120).optional(),
  website: z.string().trim().max(200).optional(),
  country: z.string().trim().max(80).optional(),
  spend: z.string().trim().max(80).optional(),
  platform: z.string().trim().max(80).optional(),
  message: z.string().trim().max(2000).optional(),
});

export type LeadPayload = z.infer<typeof leadSchema>;

export function formatLeadMessage(lead: LeadPayload) {
  const lines = [
    `New Rahim Marketing lead (${lead.type})`,
    `Name: ${lead.name}`,
    `Email: ${lead.email}`,
  ];
  if (lead.phone) lines.push(`Phone: ${lead.phone}`);
  if (lead.company) lines.push(`Company: ${lead.company}`);
  if (lead.website) lines.push(`Website: ${lead.website}`);
  if (lead.country) lines.push(`Country: ${lead.country}`);
  if (lead.spend) lines.push(`Monthly spend: ${lead.spend}`);
  if (lead.platform) lines.push(`Platform: ${lead.platform}`);
  if (lead.message) lines.push(`Message: ${lead.message}`);
  return lines.join("\n");
}

export function telegramLeadUrl(lead: LeadPayload) {
  return `${TELEGRAM_URL}?text=${encodeURIComponent(formatLeadMessage(lead))}`;
}

export async function submitLead(lead: LeadPayload): Promise<{
  ok: boolean;
  delivered: boolean;
  stored?: boolean;
  telegramUrl: string;
  error?: string;
}> {
  const res = await fetch("/api/leads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(lead),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    return {
      ok: false,
      delivered: false,
      telegramUrl: telegramLeadUrl(lead),
      error: data.error || "Could not send your request",
    };
  }
  return {
    ok: true,
    delivered: Boolean(data.delivered),
    stored: Boolean(data.stored),
    telegramUrl: data.telegramUrl || telegramLeadUrl(lead),
  };
}
