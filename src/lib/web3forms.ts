const ENDPOINT = "https://api.web3forms.com/submit";
// NEXT_PUBLIC_ → build sırasında inline edilir; Vercel env'inde tanımlı olmalı
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

export type LeadResult = { ok: true } | { ok: false; error: string };

export async function submitLead(
  payload: Record<string, string>
): Promise<LeadResult> {
  if (!ACCESS_KEY) {
    return { ok: false, error: "Form yapılandırması eksik. Lütfen bizi telefonla arayın." };
  }
  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ access_key: ACCESS_KEY, ...payload }),
    });
    const data = await res.json();
    if (res.ok && data.success) return { ok: true };
    return { ok: false, error: "Bir hata oluştu. Lütfen tekrar deneyin." };
  } catch {
    return { ok: false, error: "Bağlantı hatası. Lütfen tekrar deneyin." };
  }
}
