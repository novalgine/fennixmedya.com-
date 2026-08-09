import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description:
    "Fennix Medya Kişisel Verilerin Korunması Kanunu (KVKK) Aydınlatma Metni.",
  alternates: { canonical: "https://fennixmedya.com/kvkk-aydinlatma-metni" },
  openGraph: {
    type: "website",
    url: "https://fennixmedya.com/kvkk-aydinlatma-metni",
    title: "KVKK Aydınlatma Metni",
    description: "Fennix Medya Kişisel Verilerin Korunması Kanunu (KVKK) Aydınlatma Metni.",
    siteName: "Fennix Medya",
    locale: "tr_TR",
  },
};

export default function KvkkPage() {
  return (
    <div className="min-h-screen bg-background pt-header pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="font-heading text-3xl md:text-5xl font-black mb-8">KVKK Aydınlatma Metni</h1>
        
        <div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-body prose-headings:font-bold prose-p:text-muted-foreground prose-p:leading-relaxed">
          <p>
            Fennix Medya olarak, kişisel verilerinizin güvenliğine ve gizliliğine büyük önem veriyoruz. 
            6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, veri sorumlusu sıfatıyla, 
            kişisel verilerinizi hangi amaçlarla işleyeceğimiz, kime ve hangi amaçla aktarabileceğimiz, 
            kişisel veri toplamanın yöntemi ve hukuki sebebi ile KVKK madde 11'de sayılan diğer haklarınız 
            hakkında sizi bilgilendirmek isteriz.
          </p>

          <h2>1. Kişisel Verilerin Toplanması ve İşlenmesi</h2>
          <p>
            Kişisel verileriniz, web sitemiz üzerindeki formlar (ör. Strateji Görüşmesi Talep Formu, 
            Stüdyo Kurulum Formu, PDF İndirme Formu vb.) aracılığıyla elektronik ortamda doğrudan 
            tarafınızdan toplanmaktadır. Toplanan verileriniz arasında adınız, soyadınız, e-posta adresiniz, 
            telefon numaranız, şirket adınız ve projenize dair ilettiğiniz bilgiler yer almaktadır.
          </p>

          <h2>2. Kişisel Verilerin İşlenme Amaçları</h2>
          <p>
            Toplanan kişisel verileriniz, aşağıdaki amaçlarla KVKK'nın 5. ve 6. maddelerinde belirtilen şartlar 
            dahilinde işlenecektir:
          </p>
          <ul>
            <li>Tarafınıza sunduğumuz video prodüksiyon ve danışmanlık hizmetlerinin gerçekleştirilmesi,</li>
            <li>İletişim taleplerinize ve sorularınıza yanıt verilmesi,</li>
            <li>Strateji görüşmesi randevularının organize edilmesi,</li>
            <li>Ücretsiz dijital materyallerin (ör. PDF rehberler) tarafınıza iletilmesi,</li>
            <li>Hizmetlerimizin iyileştirilmesi ve müşteri memnuniyetinin sağlanması,</li>
            <li>Yasal yükümlülüklerimizin yerine getirilmesi.</li>
          </ul>

          <h2>3. İşlenen Kişisel Verilerin Kimlere ve Hangi Amaçla Aktarılabileceği</h2>
          <p>
            Kişisel verileriniz, kural olarak üçüncü kişilerle paylaşılmamaktadır. Ancak, yasal zorunluluklar 
            kapsamında yetkili kamu kurum ve kuruluşları ile yasal talepler doğrultusunda paylaşılabilir.
          </p>

          <h2>4. Kişisel Veri Sahibinin KVKK Madde 11'de Sayılan Hakları</h2>
          <p>
            Kanun'un 11. maddesi uyarınca veri sahipleri olarak;
          </p>
          <ul>
            <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
            <li>İşlenmişse buna ilişkin bilgi talep etme,</li>
            <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
            <li>Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme,</li>
            <li>Eksik veya yanlış işlenmiş olması hâlinde düzeltilmesini isteme,</li>
            <li>KVKK'nın 7. maddesinde öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme</li>
          </ul>
          <p>
            haklarına sahipsiniz. Taleplerinizi, sitemizdeki iletişim formları üzerinden veya doğrudan iletişim 
            adreslerimize iletebilirsiniz.
          </p>

          <p className="mt-8 text-sm text-muted-foreground">
            Son Güncelleme Tarihi: Mayıs 2026
          </p>
        </div>
      </div>
    </div>
  );
}
