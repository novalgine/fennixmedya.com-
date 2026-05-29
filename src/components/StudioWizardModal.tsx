"use client";
import React, { useState, useEffect } from "react";
import { X, ArrowLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import dynamic from "next/dynamic";
const Cal = dynamic(() => import("@calcom/embed-react"), { ssr: false });
import Link from "next/link";

type StudioWizardModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type Answers = {
  location: string;
  purpose: string;
  budget: string;
  experience: string;
  editing: string;
  name: string;
  email: string;
  phone: string;
};

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "";

const STEP_LABELS = ["Mekan", "Kullanım", "Bütçe", "Deneyim", "Kurgu", "İletişim", "Takvim"];
const TOTAL_STEPS = 7;

const StudioWizardModal: React.FC<StudioWizardModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [answers, setAnswers] = useState<Answers>({
    location: "",
    purpose: "",
    budget: "",
    experience: "",
    editing: "",
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (step === 7) {
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
      setAnswers({ location: "", purpose: "", budget: "", experience: "", editing: "", name: "", email: "", phone: "" });
    }, 300);
  };

  const handleSelect = (key: keyof Answers, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    setTimeout(() => {
      setStep((prev) => prev + 1);
    }, 300);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setError("");

    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Yeni Stüdyo Kurulum Talebi: ${answers.name}`,
          from_name: "Fennix Medya Stüdyo Wizard",
          "Ad Soyad": answers.name,
          "E-posta": answers.email,
          "Telefon": answers.phone,
          "Mekan": answers.location,
          "Kullanım Amacı": answers.purpose,
          "Bütçe Aralığı": answers.budget,
          "Deneyim": answers.experience,
          "Kurgu İhtiyacı": answers.editing,
        }),
      });

      setStep(7);
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
          {step > 1 && step < 7 ? (
            <button onClick={handleBack} className="text-muted-foreground hover:text-white transition-colors flex items-center gap-1 text-sm font-medium">
              <ArrowLeft className="w-4 h-4" /> Geri
            </button>
          ) : (
            <div className="w-16" /> // Spacer
          )}
          
          <div className="flex flex-col items-center gap-1.5" style={{ display: step === 7 ? "none" : "flex" }}>
            <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground/70">Adım {step}/6</span>
            <div className="flex gap-1">
              {STEP_LABELS.slice(0, 6).map((label, i) => (
                <div 
                  key={label} 
                  className={`h-1.5 rounded-full transition-all duration-500 ${step >= i + 1 ? "bg-gradient-gold w-4" : "bg-white/10 w-2"}`} 
                  title={label}
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
          
          {/* Step 1 - Mekan */}
          {step === 1 && (
            <div className="animate-in slide-in-from-right-4 fade-in duration-300">
              <h2 className="text-2xl font-heading font-bold text-white mb-2">Stüdyonuzu Tasarlayalım</h2>
              <p className="text-muted-foreground mb-6">Stüdyonuzu nereye kuracaksınız?</p>
              
              <div className="space-y-3">
                {[
                  { value: "Evde bir oda", emoji: "🏠", desc: "Evinizde bir odayı profesyonel stüdyoya dönüştürelim" },
                  { value: "Ofiste bir alan", emoji: "🏢", desc: "Ofisinizde içerik üretim alanı oluşturalım" },
                  { value: "Henüz karar vermedim", emoji: "🤷", desc: "Birlikte en uygun mekanı belirleyelim" },
                ].map((option) => (
                  <button 
                    key={option.value}
                    onClick={() => handleSelect("location", option.value)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between group
                      ${answers.location === option.value ? "bg-white/10 border-primary shadow-[0_0_20px_rgba(212,164,74,0.2)]" : "bg-black/20 border-white/5 hover:border-white/20 hover:bg-white/5"}`}
                  >
                    <div>
                      <h3 className="font-semibold text-white text-lg group-hover:text-primary transition-colors">
                        {option.emoji} {option.value}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">{option.desc}</p>
                    </div>
                    <ChevronRight className={`w-5 h-5 flex-shrink-0 ${answers.location === option.value ? "text-primary" : "text-muted-foreground"}`} />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2 - Kullanım Amacı */}
          {step === 2 && (
            <div className="animate-in slide-in-from-right-4 fade-in duration-300">
              <h2 className="text-2xl font-heading font-bold text-white mb-2">Kullanım Amacı</h2>
              <p className="text-muted-foreground mb-6">Stüdyoyu ne için kullanacaksınız?</p>
              
              <div className="space-y-3">
                {[
                  { value: "Sosyal medya içerikleri (Reels/TikTok)", emoji: "📱" },
                  { value: "Podcast / Söyleşi", emoji: "🎙️" },
                  { value: "YouTube / Eğitim videoları", emoji: "📹" },
                  { value: "Ürün tanıtım çekimleri", emoji: "📦" },
                  { value: "Hepsi bir arada", emoji: "🔄" },
                ].map((option) => (
                  <button 
                    key={option.value}
                    onClick={() => handleSelect("purpose", option.value)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between group
                      ${answers.purpose === option.value ? "bg-white/10 border-primary shadow-[0_0_20px_rgba(212,164,74,0.2)]" : "bg-black/20 border-white/5 hover:border-white/20 hover:bg-white/5"}`}
                  >
                    <h3 className="font-semibold text-white text-lg group-hover:text-primary transition-colors">
                      {option.emoji} {option.value}
                    </h3>
                    <ChevronRight className={`w-5 h-5 flex-shrink-0 ${answers.purpose === option.value ? "text-primary" : "text-muted-foreground"}`} />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3 - Bütçe */}
          {step === 3 && (
            <div className="animate-in slide-in-from-right-4 fade-in duration-300">
              <h2 className="text-2xl font-heading font-bold text-white mb-2">Bütçe Aralığı</h2>
              <p className="text-muted-foreground mb-6">Bu proje için düşündüğünüz bütçe nedir?</p>
              
              <div className="space-y-3">
                {[
                  { value: "20.000₺ – 40.000₺", emoji: "💰" },
                  { value: "40.000₺ – 75.000₺", emoji: "💰💰" },
                  { value: "75.000₺ ve üzeri", emoji: "💰💰💰" },
                  { value: "Henüz bir bütçe belirlemedim", emoji: "🤔" },
                ].map((option) => (
                  <button 
                    key={option.value}
                    onClick={() => handleSelect("budget", option.value)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between group
                      ${answers.budget === option.value ? "bg-white/10 border-primary shadow-[0_0_20px_rgba(212,164,74,0.2)]" : "bg-black/20 border-white/5 hover:border-white/20 hover:bg-white/5"}`}
                  >
                    <h3 className="font-semibold text-white text-lg group-hover:text-primary transition-colors">
                      {option.emoji} {option.value}
                    </h3>
                    <ChevronRight className={`w-5 h-5 flex-shrink-0 ${answers.budget === option.value ? "text-primary" : "text-muted-foreground"}`} />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4 - Deneyim */}
          {step === 4 && (
            <div className="animate-in slide-in-from-right-4 fade-in duration-300">
              <h2 className="text-2xl font-heading font-bold text-white mb-2">İçerik Deneyiminiz</h2>
              <p className="text-muted-foreground mb-6">Daha önce içerik ürettiniz mi?</p>
              
              <div className="space-y-3">
                {[
                  { value: "Evet, düzenli üretiyorum ama kaliteden memnun değilim", emoji: "✅", desc: "Profesyonel ortamla seviye atlayalım" },
                  { value: "Birkaç kez denedim ama sürdüremedim", emoji: "🔄", desc: "Doğru sistemle sürdürülebilir hale getirelim" },
                  { value: "Hayır, sıfırdan başlayacağım", emoji: "❌", desc: "Sizi A'dan Z'ye hazırlayalım" },
                ].map((option) => (
                  <button 
                    key={option.value}
                    onClick={() => handleSelect("experience", option.value)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between group
                      ${answers.experience === option.value ? "bg-white/10 border-primary shadow-[0_0_20px_rgba(212,164,74,0.2)]" : "bg-black/20 border-white/5 hover:border-white/20 hover:bg-white/5"}`}
                  >
                    <div>
                      <h3 className="font-semibold text-white text-lg group-hover:text-primary transition-colors">
                        {option.emoji} {option.value}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">{option.desc}</p>
                    </div>
                    <ChevronRight className={`w-5 h-5 flex-shrink-0 ${answers.experience === option.value ? "text-primary" : "text-muted-foreground"}`} />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 5 - Kurgu İhtiyacı */}
          {step === 5 && (
            <div className="animate-in slide-in-from-right-4 fade-in duration-300">
              <h2 className="text-2xl font-heading font-bold text-white mb-2">Kurgu (Montaj) İhtiyacı</h2>
              <p className="text-muted-foreground mb-6">Videolarınızı çektikten sonra, profesyonel kurgusunu da üstlenmemizi ister misiniz?</p>
              
              <div className="space-y-3">
                {[
                  { value: "Evet, kurgu desteği de almak isterim", emoji: "✂️", desc: "Çekim sonrası tüm düzenleme ve efektleri biz yapalım" },
                  { value: "Hayır, sadece stüdyo kurulumu yeterli", emoji: "⚙️", desc: "Kurguyu ben veya kendi ekibim yapacak" },
                ].map((option) => (
                  <button 
                    key={option.value}
                    onClick={() => handleSelect("editing", option.value)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between group
                      ${answers.editing === option.value ? "bg-white/10 border-primary shadow-[0_0_20px_rgba(212,164,74,0.2)]" : "bg-black/20 border-white/5 hover:border-white/20 hover:bg-white/5"}`}
                  >
                    <div>
                      <h3 className="font-semibold text-white text-lg group-hover:text-primary transition-colors">
                        {option.emoji} {option.value}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">{option.desc}</p>
                    </div>
                    <ChevronRight className={`w-5 h-5 flex-shrink-0 ${answers.editing === option.value ? "text-primary" : "text-muted-foreground"}`} />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 6 - İletişim Bilgileri */}
          {step === 6 && (
            <div className="animate-in slide-in-from-right-4 fade-in duration-300">
              <h2 className="text-2xl font-heading font-bold text-white mb-2">Harika! Son bir adım...</h2>
              <p className="text-muted-foreground mb-6">Size özel stüdyo planınızı oluşturabilmemiz için iletişim bilgilerinizi girin ve takvime geçin.</p>
              
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
                      id="kvkk_studio"
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
                  className="w-full bg-gradient-gold text-primary-foreground font-black text-lg py-4 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(212,164,74,0.3)] mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Gönderiliyor..." : "Randevu Oluştur →"}
                </button>
              </form>
            </div>
          )}

          {/* Step 7 - Cal.com Takvim */}
          {step === 7 && (
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

export default StudioWizardModal;
