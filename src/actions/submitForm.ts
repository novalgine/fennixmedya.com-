"use server";

export async function submitWeb3Form(formData: {
  subject: string;
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  [key: string]: any;
}) {
  try {
    // This key is safely stored on the server now
    const access_key = process.env.WEB3FORMS_ACCESS_KEY || "b2890264-5337-4e27-9cba-7b64c7e6aa09";
    
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key,
        ...formData,
      }),
    });
    
    const data = await response.json();
    return { success: data.success, message: data.message };
  } catch (error) {
    console.error("Web3Forms submission error:", error);
    return { success: false, message: "Bağlantı hatası oluştu." };
  }
}
