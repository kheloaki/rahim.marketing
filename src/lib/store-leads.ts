import { promises as fs } from "fs";
import path from "path";
import type { LeadPayload } from "@/lib/leads";

export type StoredLead = LeadPayload & {
  id: string;
  receivedAt: string;
  deliveredVia: string[];
};

async function appendToFile(filePath: string, record: StoredLead) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  let existing: StoredLead[] = [];
  try {
    const raw = await fs.readFile(filePath, "utf8");
    const parsed = JSON.parse(raw) as unknown;
    if (Array.isArray(parsed)) existing = parsed as StoredLead[];
  } catch {
    existing = [];
  }
  existing.push(record);
  await fs.writeFile(filePath, JSON.stringify(existing, null, 2));
}

export async function persistLead(lead: LeadPayload, deliveredVia: string[]) {
  const record: StoredLead = {
    id: crypto.randomUUID(),
    receivedAt: new Date().toISOString(),
    deliveredVia: [...deliveredVia, "file"],
    ...lead,
  };

  const candidates = [
    path.join(process.cwd(), "data", "leads.json"),
    path.join("/tmp", "rahim-leads", "leads.json"),
  ];

  for (const filePath of candidates) {
    try {
      await appendToFile(filePath, record);
      return { stored: true as const, filePath };
    } catch {
      // Try the next writable location (Vercel only allows /tmp).
    }
  }

  return { stored: false as const, filePath: null };
}
