"use client";
import React, { useState, useEffect } from "react";
import { X, ArrowLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import dynamic from "next/dynamic";
const Cal = dynamic(() => import("@calcom/embed-react"), { ssr: false });
import Link from "next/link";

const WEB3FORMS_KEY = "b2890264-5337-4e27-9cba-7b64c7e6aa09";

type FunnelWizardModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type Answers = {
  format: string;
  model: string;
  content: string;
  name: string;
  email: string;
  phone: string;
};


const FunnelWizardModal: React.FC<FunnelWizardModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [answers, setAnswers] = useState<Answers>({
    format: "",
    model: "",
    content: "",
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (step === 5) {
      import("@calcom/embed-react").then((mod) => {
        mod.getCalApi({}).then((cal) => {
          cal("ui", {"styles":{"branding":{"brandColor":"#D4A44A"}},"hideEventTypeDetails":false,"layout":"month_view"});
        });
      });
    }
  }, [step]);

  if (!isOpen) return null;

  const handleCloseModal = () => {
    onClose();
    setTimeout(() => {
      setStep(1);
      setAnswers({ format: "", model: "", content: "", name: "", email: "", phone: "" });
    }, 300);
  };

  const handleSelect = (key: keyof Answers, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    setTimeout(() => {
      setStep((prev) => prev + 1);
    }, 300); // Slight delay for UX
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // 1. Web3Forms ile E-posta Gönderimi (client-side)
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Yeni Form Başvurusu (Sihirbaz): ${answers.name}`,
          from_name: "Fennix Medya Wizard",
          "Ad Soyad": answers.name,
          "E-posta": answers.email,
          "Telefon": answers.phone,
          "Format": answers.format,
          "Model": answers.model,
          "İçerik/Senaryo Türü": answers.content,
        }),
      });
      const data = await response.json();

      if (!data.success) {
        setError("Bir hata oluştu. Lütfen tekrar deneyin.");
        return;
      }

      // 2. Takvim Adımına Geçiş (Cal.com Inline Embed)
      setStep(5);

    } catch (err) {
      console.error("Form gönderim hatası:", err);
      setError("Bir hata oluştu. Lütfen bağlantınızı kontrol edip tekrar deneyin.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-xl bg-black/80 animate-in fade-in duration-300">
      <div className="bg-surface/90 border border-white/10 rounded-2xl w-full max-w-lg shadow-[0_0_80px_rgba(212,164,74,0.15)] overflow-hidden relative flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 relative z-10">
          {step > 1 && step < 5 ? (
            <button onClick={handleBack} className="text-muted-foreground hover:text-white transition-colors flex items-center gap-1 text-sm font-medium">
              <ArrowLeft className="w-4 h-4" /> Geri
            </button>
          ) : (
            <div className="w-16" /> // Spacer
          )}
          
          <div className="flex flex-col items-center gap-1.5" style={{ display: step === 5 ? "none" : "flex" }}>
            <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground/70">Adım {step}/4</span>
            <div className="flex gap-1">
              {[1, 2, 3, 4].map((i) => (
                <div 
                  key={i} 
                  className={`h-1.5 rounded-full transition-all duration-500 ${step >= i ? "bg-gradient-gold w-6" : "bg-white/10 w-2"}`} 
                />
              ))}
            </div>
          </div>

          <button onClick={handleCloseModal} className="text-muted-foreground hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-1.5 rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 flex-grow overflow-y-auto relative z-10">
          
          {step === 1 && (
            <div className="animate-in slide-in-from-right-4 fade-in duration-300">
              <h2 className="text-2xl font-heading font-bold text-white mb-2">Hangi formata ihtiyacınız var?</h2>
              <p className="text-muted-foreground mb-6">Prodüksiyonunuzun ana mecrasını belirleyelim.</p>
              
              <div className="space-y-3">
                <button 
                  onClick={() => handleSelect("format", "Dikey (Sosyal Medya, Reels)")}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between group
                    ${answers.format === "Dikey (Sosyal Medya, Reels)" ? "bg-white/10 border-primary shadow-[0_0_20px_rgba(212,164,74,0.2)]" : "bg-black/20 border-white/5 hover:border-white/20 hover:bg-white/5"}`}
                >
                  <div>
                    <h3 className="font-semibold text-white text-lg group-hover:text-primary transition-colors">Dikey (Sosyal Medya, Reels)</h3>
                    <p className="text-sm text-muted-foreground mt-1">Reels, TikTok, Shorts için özel kurgulanmış</p>
                  </div>
                  <ChevronRight className={`w-5 h-5 ${answers.format === "Dikey (Sosyal Medya, Reels)" ? "text-primary" : "text-muted-foreground"}`} />
                </button>

                <button 
                  onClick={() => handleSelect("format", "Yatay (YouTube, TV)")}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between group
                    ${answers.format === "Yatay (YouTube, TV)" ? "bg-white/10 border-primary shadow-[0_0_20px_rgba(212,164,74,0.2)]" : "bg-black/20 border-white/5 hover:border-white/20 hover:bg-white/5"}`}
                >
                  <div>
                    <h3 className="font-semibold text-white text-lg group-hover:text-primary transition-colors">Yatay (YouTube, TV)</h3>
                    <p className="text-sm text-muted-foreground mt-1">Tanıtım filmleri, YouTube serileri, Klipler</p>
                  </div>
                  <ChevronRight className={`w-5 h-5 ${answers.format === "Yatay (YouTube, TV)" ? "text-primary" : "text-muted-foreground"}`} />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="animate-in slide-in-from-right-4 fade-in duration-300">
              <h2 className="text-2xl font-heading font-bold text-white mb-2">Çalışma modeli nasıl olsun?</h2>
              <p className="text-muted-foreground mb-6">İhtiyacınızın süresini belirleyelim.</p>
              
              <div className="space-y-3">
                <button 
                  onClick={() => handleSelect("model", "Uzun Soluklu / Aylık")}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between group relative overflow-hidden
                    ${answers.model === "Uzun Soluklu / Aylık" ? "bg-white/10 border-primary shadow-[0_0_20px_rgba(212,164,74,0.2)]" : "bg-black/20 border-white/5 hover:border-white/20 hover:bg-white/5"}`}
                >
                  <div className="absolute top-0 right-0 bg-primary/20 text-primary text-[10px] font-bold px-2 py-0.5 rounded-bl-lg">ÖNERİLEN</div>
                  <div>
                    <h3 className="font-semibold text-white text-lg group-hover:text-primary transition-colors mt-1">Aylık Düzenli Üretim</h3>
                    <p className="text-sm text-muted-foreground mt-1">Ayda sadece birkaç saat ayırarak 30 günlük içerik</p>
                  </div>
                  <ChevronRight className={`w-5 h-5 ${answers.model === "Uzun Soluklu / Aylık" ? "text-primary" : "text-muted-foreground"}`} />
                </button>

                <button 
                  onClick={() => handleSelect("model", "Tek Seferlik")}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between group
                    ${answers.model === "Tek Seferlik" ? "bg-white/10 border-primary shadow-[0_0_20px_rgba(212,164,74,0.2)]" : "bg-black/20 border-white/5 hover:border-white/20 hover:bg-white/5"}`}
                >
                  <div>
                    <h3 className="font-semibold text-white text-lg group-hover:text-primary transition-colors">Tek Seferlik</h3>
                    <p className="text-sm text-muted-foreground mt-1">Belirli bir kampanya veya deneme çekimi</p>
                  </div>
                  <ChevronRight className={`w-5 h-5 ${answers.model === "Tek Seferlik" ? "text-primary" : "text-muted-foreground"}`} />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-in slide-in-from-right-4 fade-in duration-300">
              {answers.format.includes("Dikey") ? (
                <>
                  <h2 className="text-2xl font-heading font-bold text-white mb-2">İçerik ve Senaryo</h2>
                  <p className="text-muted-foreground mb-6">Fikirleri kim üretecek?</p>
                  <div className="space-y-3">
                    <button 
                      onClick={() => handleSelect("content", "Anahtar Teslim (Fennix Medya)")}
                      className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between group
                        ${answers.content === "Anahtar Teslim (Fennix Medya)" ? "bg-white/10 border-primary shadow-[0_0_20px_rgba(212,164,74,0.2)]" : "bg-black/20 border-white/5 hover:border-white/20 hover:bg-white/5"}`}
                    >
                      <div>
                        <h3 className="font-semibold text-white text-lg group-hover:text-primary transition-colors">Anahtar Teslim (A'dan Z'ye)</h3>
                        <p className="text-sm text-muted-foreground mt-1">Konsept, metin, çekim ve kurguyu biz halledelim</p>
                      </div>
                      <ChevronRight className={`w-5 h-5 ${answers.content === "Anahtar Teslim (Fennix Medya)" ? "text-primary" : "text-muted-foreground"}`} />
                    </button>
                    <button 
                      onClick={() => handleSelect("content", "Sadece Çekim ve Kurgu")}
                      className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between group
                        ${answers.content === "Sadece Çekim ve Kurgu" ? "bg-white/10 border-primary shadow-[0_0_20px_rgba(212,164,74,0.2)]" : "bg-black/20 border-white/5 hover:border-white/20 hover:bg-white/5"}`}
                    >
                      <div>
                        <h3 className="font-semibold text-white text-lg group-hover:text-primary transition-colors">Sadece Çekim & Kurgu</h3>
                        <p className="text-sm text-muted-foreground mt-1">Fikir ve metin bende, siz profesyonelce çekin</p>
                      </div>
                      <ChevronRight className={`w-5 h-5 ${answers.content === "Sadece Çekim ve Kurgu" ? "text-primary" : "text-muted-foreground"}`} />
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-heading font-bold text-white mb-2">Video Türü</h2>
                  <p className="text-muted-foreground mb-6">Nasıl bir içerik planlıyorsunuz?</p>
                  <div className="space-y-3">
                    {["Tanıtım Filmi", "YouTube Serisi", "Müzik Klibi / Etkinlik", "Diğer"].map((type) => (
                      <button 
                        key={type}
                        onClick={() => handleSelect("content", type)}
                        className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between group
                          ${answers.content === type ? "bg-white/10 border-primary shadow-[0_0_20px_rgba(212,164,74,0.2)]" : "bg-black/20 border-white/5 hover:border-white/20 hover:bg-white/5"}`}
                      >
                        <h3 className="font-semibold text-white text-lg group-hover:text-primary transition-colors">{type}</h3>
                        <ChevronRight className={`w-5 h-5 ${answers.content === type ? "text-primary" : "text-muted-foreground"}`} />
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          {step === 4 && (
            <div className="animate-in slide-in-from-right-4 fade-in duration-300">
              <h2 className="text-2xl font-heading font-bold text-white mb-2">Harika! Son bir adım...</h2>
              <p className="text-muted-foreground mb-6">Size özel stratejimizi oluşturabilmemiz için iletişim bilgilerinizi girin ve takvime geçin.</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-white/70 mb-1 block">Ad Soyad</label>
                  <input 
                    required 
                    type="text" 
                    value={answers.name}
                    onChange={(e) => setAnswers({...answers, name: e.target.value})}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="Adınız Soyadınız"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-white/70 mb-1 block">E-posta</label>
                  <input 
                    required 
                    type="email" 
                    value={answers.email}
                    onChange={(e) => setAnswers({...answers, email: e.target.value})}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="ornek@sirket.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-white/70 mb-1 block">Telefon</label>
                  <input 
                    required 
                    type="tel" 
                    value={answers.phone}
                    onChange={(e) => setAnswers({...answers, phone: e.target.value})}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="05XX XXX XX XX"
                  />
                </div>

                <div className="flex items-start gap-3 mt-4 mb-2">
                  <div className="flex items-center h-5">
                    <input
                      id="kvkk"
                      type="checkbox"
                      required
                      className="w-4 h-4 rounded border-white/20 bg-black/40 text-primary focus:ring-primary focus:ring-offset-background"
                    />
                  </div>
                  <div className="text-xs text-muted-foreground leading-relaxed">
                    Kişisel verilerimin <Link href="/kvkk-aydinlatma-metni" className="text-primary hover:underline" target="_blank">KVKK Aydınlatma Metni</Link> kapsamında işlenmesini ve iletişim bilgilerim üzerinden benimle iletişime geçilmesini kabul ediyorum.
                  </div>
                </div>
                
                {error && (
                  <p className="text-red-400 text-sm text-center">{error}</p>
                )}

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-gold text-primary-foreground font-bold text-lg py-4 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(212,164,74,0.3)] mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Gönderiliyor..." : "Randevu Oluştur →"}
                </button>
              </form>
            </div>
          )}

          {step === 5 && (
            <div className="animate-in zoom-in-95 fade-in duration-500 flex flex-col items-center justify-center w-full h-[450px]">
              <div className="w-full h-full bg-white rounded-xl overflow-hidden">
                <Cal 
                  calLink="semihhasanoglu/15min"
                  style={{width:"100%",height:"100%",overflow:"scroll"}}
                  config={{name: answers.name, email: answers.email}}
                />
              </div>
            </div>
          )}

        </div>
        
        {/* Subtle background glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[100px] bg-primary/20 blur-[100px] pointer-events-none" />
      </div>
    </div>
  );
};

export default FunnelWizardModal;
