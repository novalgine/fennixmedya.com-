const fs = require('fs');
const path = require('path');

const blogs = [
  {
    slug: 'sirketler-icin-video-pazarlama-stratejisi-2025',
    title: 'Şirketler İçin Video Pazarlama Stratejisi (2025)',
    desc: '2025 yılında B2B ve B2C şirketlerin kullanması gereken en etkili video pazarlama stratejileri ve trendleri.',
    date: '28 Mayıs 2025',
    readTime: '4-5 dk',
    content: [
      { type: 'p', text: 'Dijital pazarlama dünyası her geçen gün daha fazla görselleşirken, 2025 yılında video pazarlamanın gücü tartışılmaz bir noktaya ulaştı. Markalar artık sadece statik görsellerle değil, hikaye anlatan, duygu uyandıran ve dönüşüm sağlayan video içeriklerle rekabet ediyor.' },
      { type: 'h2', text: '1. Kısa Form İçeriklerin Hakimiyeti (Short-Form Video)' },
      { type: 'p', text: 'TikTok, Instagram Reels ve YouTube Shorts gibi platformlar sayesinde kullanıcıların dikkat süresi giderek kısalıyor. Şirketler, ürünlerini veya hizmetlerini ilk 3 saniyede etkileyici bir şekilde sunan dikey videolara (vertical video) yatırım yapmalıdır. Kısa ve öz mesajlar, organik erişimin anahtarıdır.' },
      { type: 'h2', text: '2. Şeffaflık ve Kamera Arkası (Behind The Scenes)' },
      { type: 'p', text: 'Tüketiciler artık mükemmel kurgulanmış reklamlardan çok, şeffaf ve samimi markalara güveniyor. Şirketlerin ofis içi yaşamını, üretim süreçlerini veya ekip dinamiklerini gösteren videolar, marka sadakatini artırmanın en etkili yollarından biridir.' },
      { type: 'h2', text: '3. Video Funnel (Video Hunisi) Kurulumu' },
      { type: 'p', text: 'Sadece farkındalık yaratmak yetmez. Şirketler, izleyicileri müşteriye dönüştürecek bir video hunisi (video funnel) kurmalıdır. Soğuk kitleye yönelik genel sorunları ele alan reklamlar, sıcak kitleye yönelik ise ürünün çözümünü detaylandıran eğitim videoları ve müşteri referans (case study) videoları kullanılmalıdır.' },
      { type: 'h2', text: '4. Eğitici ve Bilgilendirici İçerikler (Edutainment)' },
      { type: 'p', text: 'Sadece satış odaklı değil, aynı zamanda eğiten ve eğlendiren içerikler (edutainment) 2025\'in parlayan yıldızı. Şirketiniz, bulunduğu sektörde bir "otorite" olarak konumlanmalı ve kullanıcıların sorunlarına video ile ücretsiz çözümler sunmalıdır.' },
      { type: 'h2', text: 'Sonuç' },
      { type: 'p', text: 'Video pazarlama artık bir lüks değil, zorunluluktur. 2025 stratejinizi oluştururken dikey formata, şeffaflığa ve dönüşüm odaklı kurgulara öncelik vermelisiniz. Profesyonel destek almak, bu süreci hızlandıracak ve hata payını sıfıra indirecektir.' }
    ]
  },
  {
    slug: 'ugc-vs-profesyonel-cekim',
    title: 'Kullanıcı Tarafından Oluşturulan İçerik (UGC) vs Profesyonel Çekim',
    desc: 'Hangi durumda UGC (User Generated Content), hangi durumda sinematik profesyonel çekim kullanılmalı? Markalar için karşılaştırmalı rehber.',
    date: '26 Mayıs 2025',
    readTime: '4-5 dk',
    content: [
      { type: 'p', text: 'Video pazarlama stratejilerinde en çok tartışılan konulardan biri: İçerikler tamamen doğal (UGC) mi görünmeli, yoksa yüksek bütçeli sinematik bir prodüksiyon mu olmalı? Doğru cevap, markanızın hedef kitlesine ve kampanya amacına göre değişir.' },
      { type: 'h2', text: 'UGC (Kullanıcı Tarafından Oluşturulan İçerik) Nedir?' },
      { type: 'p', text: 'UGC, markanın kendisi yerine tüketiciler veya içerik üreticileri tarafından cep telefonuyla, doğal bir akışta oluşturulan içeriklerdir. Çok yüksek bir prodüksiyon kalitesi aranmaz, asıl odak "samimiyet"tir.' },
      { type: 'h3', text: 'UGC Ne Zaman Kullanılmalı?' },
      { type: 'p', text: 'B2C (tüketici odaklı) ürünlerde (örneğin kozmetik, giyim, gıda) doğrudan satış veya soğuk kitle reklamlarında (Top of Funnel). İnsanlar, kendileri gibi sıradan insanların ürünü deneyimlediğini gördüklerinde satın alma kararı hızlanır. Ayrıca TikTok ve Reels organik paylaşımlarında mükemmel sonuç verir.' },
      { type: 'h2', text: 'Profesyonel Prodüksiyon Nedir?' },
      { type: 'p', text: 'Sinema kameraları, profesyonel ışıklar, özenli ses tasarımı ve renk kurgusu içeren üst düzey içeriklerdir. Markanın premium algısını pekiştirir.' },
      { type: 'h3', text: 'Profesyonel Çekim Ne Zaman Kullanılmalı?' },
      { type: 'p', text: 'Kurumsal tanıtım filmlerinde, yatırımcı sunumlarında, web sitesi giriş (hero) videolarında ve High-Ticket (yüksek fiyatlı) hizmet satışlarında. Lüks gayrimenkul, sağlık turizmi, B2B kurumsal çözümler satıyorsanız, müşteriniz önce "güven" arar. Kalitesiz bir video, markanın kalitesiz olduğu algısını yaratır.' },
      { type: 'h2', text: 'İkisinin Harmanlanması (Hibrit Model)' },
      { type: 'p', text: '2025 stratejilerinde en başarılı markalar, bu iki modeli harmanlar. Sosyal medya reklamlarında UGC tarzı "hook" (kanca) videolarıyla dikkat çekerken, müşteri siteye veya toplantıya geldiğinde onu karşılayan profesyonel bir şirket profili veya güven inşa eden yüksek kaliteli referans videolarıyla (case study) dönüşümü sağlarlar.' }
    ]
  },
  {
    slug: 'saglik-turizminde-video-kullanimi',
    title: 'Sağlık Turizminde Videonun Gücü: Yabancı Hasta Nasıl Bulunur?',
    desc: 'Türkiye\'deki klinikler ve hastaneler için yurtdışından hasta getiren güven odaklı video pazarlama stratejileri.',
    date: '24 Mayıs 2025',
    readTime: '4-5 dk',
    content: [
      { type: 'p', text: 'Türkiye, sağlık turizminde dünyanın önde gelen destinasyonlarından biri. Ancak rekabet çok yüksek. İngiltere, Almanya veya ABD\'deki bir hasta, binlerce kilometre ötedeki bir kliniğe neden güvenmeli? İşte tam burada videonun "güven inşa etme" gücü devreye giriyor.' },
      { type: 'h2', text: '1. Güven, Görsellikle Başlar' },
      { type: 'p', text: 'Yabancı hastalar için en büyük bariyer güvensizliktir. Sadece metin tabanlı vaatler yeterli değildir. Kliniğin hijyenik ve modern yüzü, son teknoloji cihazlar ve ferah bir bekleme salonu sinematik bir tanıtım filmiyle gösterilmelidir. Hasta daha uçağa binmeden klinikteki atmosferi hissetmelidir.' },
      { type: 'h2', text: '2. Doktorun Otoritesini Yansıtan İçerikler' },
      { type: 'p', text: 'Hasta, kliniğe değil, doktora gelir. Doktorun kamera karşısına geçip operasyon süreçlerini net, sakin ve profesyonel bir dille (tercihen İngilizce veya altyazılı) anlatması, dönüşüm oranlarını dramatik şekilde artırır. Soru-cevap videoları ve uzmanlık belirten röportajlar şarttır.' },
      { type: 'h2', text: '3. Hasta Deneyimi (Testimonial) Videoları' },
      { type: 'p', text: 'Mutlu hastaların havaalanından karşılanmasından, tedavi sürecine ve ülkesine gülümseyerek uğurlanmasına kadar olan "Hasta Yolculuğu" belgesel tadında video haline getirilmelidir. Önceki hastaların olumlu yorumlarını video formatında izletmek, potansiyel hastaların en çok etkilendiği içerik türüdür.' },
      { type: 'h2', text: '4. Sosyal Medya İçin Mikro İçerikler' },
      { type: 'p', text: 'Sadece uzun tanıtımlar değil; diş beyazlatma öncesi-sonrası, saç ekimi operasyon detayları gibi 15 saniyelik Reels ve TikTok videolarıyla da sürekli organik trafik sağlanmalı ve marka hafızalara kazınmalıdır.' }
    ]
  },
  {
    slug: 'gayrimenkul-satislarinda-video-produksiyon',
    title: 'Gayrimenkul Satışlarında Video Prodüksiyonun Gücü',
    desc: 'Lüks konut ve ticari gayrimenkul satışlarında video içeriklerle satış sürecini hızlandırma rehberi.',
    date: '22 Mayıs 2025',
    readTime: '4-5 dk',
    content: [
      { type: 'p', text: 'Gayrimenkul sektörü, duyguların ve büyük yatırımların birleştiği bir alandır. Özellikle lüks konut veya ticari proje satışlarında, statik fotoğraflar artık müşteriyi ikna etmek için yeterli olmuyor. Alıcılar, o mekanda yaşamayı hayal etmek isterler.' },
      { type: 'h2', text: 'Neden Profesyonel Video?' },
      { type: 'p', text: 'Kötü ışıkta, titreyen bir telefonla çekilmiş bir video, milyonlarca liralık bir evin değerini anında düşürür. Sinematik aydınlatma, drone çekimleri ve akıcı kamera hareketleri (gimbal) evinizin veya projenizin "Premium" algısını destekler. Fiyat ne kadar yüksekse, pazarlama materyalinin kalitesi de o kadar yüksek olmalıdır.' },
      { type: 'h2', text: 'Lifestyle (Yaşam Tarzı) Odaklı Yaklaşım' },
      { type: 'p', text: 'Sadece odaların büyüklüğünü göstermek değil, o evin sunduğu "yaşam tarzını" satmak önemlidir. Videoda şömine başında kahve içen biri, havuz kenarında dinlenen bir aile gibi lifestyle detaylara yer vermek, alıcıyla duygusal bağ kurar.' },
      { type: 'h2', text: 'Bölge ve Çevre Analizi (Drone Çekimleri)' },
      { type: 'p', text: 'Gayrimenkulde konum her şeydir. Mülkün hastanelere, okullara, denize veya ulaşım ağlarına olan yakınlığını anlatan profesyonel havadan çekimler, yabancı veya şehir dışından yatırım yapacak müşteriler için karar verdirici bir faktördür.' },
      { type: 'h2', text: 'Danışman Otoritesi' },
      { type: 'p', text: 'Videoda gayrimenkul danışmanının bizzat mülkü gezdirmesi ve detayları anlatması, danışmanın kişisel markasını güçlendirir ve sonraki satışlar için muazzam bir güven inşa eder.' }
    ]
  },
  {
    slug: 'iyi-bir-kurumsal-tanitim-filmi-nasil-olmali',
    title: 'İyi Bir Kurumsal Tanıtım Filmi Nasıl Olmalı?',
    desc: 'B2B markalar için sıkıcı olmayan, akılda kalıcı ve vizyoner bir kurumsal tanıtım filmi hazırlamanın sırları.',
    date: '20 Mayıs 2025',
    readTime: '4-5 dk',
    content: [
      { type: 'p', text: 'Kurumsal tanıtım filmleri genellikle makinelerin, plazaların ve sıkıcı bir dış sesin (voiceover) domine ettiği, izleyicinin 10. saniyede sıkıldığı içerikler olma eğilimindedir. Peki iyi bir B2B kurumsal film nasıl fark yaratır?' },
      { type: 'h2', text: '1. Makineleri Değil, Vizyonu Anlatın' },
      { type: 'p', text: 'Müşterileriniz sizin kaç metrekare kapalı alanınız olduğuyla ilgilenmez; sizin onların hangi sorununu nasıl çözdüğünüzle ilgilenir. Kurumsal film, ürünlerin ötesinde şirketin vizyonunu, inovasyona yaklaşımını ve kurumsal kültürünü yansıtmalıdır.' },
      { type: 'h2', text: '2. İnsan Odaklı (Human-Centric) Yaklaşım' },
      { type: 'p', text: 'Şirketi var eden şey içindeki insanlardır. Sadece robotik üretim bantlarını değil, tutkuyla çalışan mühendislerinizi, kalite kontrolde titizlenen ekibinizi ve gülümseyen personelinizi gösterin. B2B satışlarda bile kararları insanlar verir ve duygular ön plandadır.' },
      { type: 'h2', text: '3. Tempo ve Müzik Kullanımı' },
      { type: 'p', text: 'Ağır ve monoton jenerik müzikler yerine, markanın enerjisine uygun, sinematik ve ritmik müzikler tercih edilmelidir. Kurgu (montaj), izleyicinin ilgisini sürekli taze tutacak dinamik bir tempoda olmalıdır.' },
      { type: 'h2', text: '4. Sinematografi ve Renk Düzenlemesi (Color Grading)' },
      { type: 'p', text: 'Sıradan bir ofis ortamı bile doğru aydınlatma, sinema lensleri ve profesyonel renk düzeltmesi (color grading) ile bir Hollywood sahnesine dönüşebilir. Bu premium görünüm, doğrudan şirketinizin pazardaki algısını "lider" konuma taşır.' }
    ]
  },
  {
    slug: 'reels-tiktok-algoritmasi-2025',
    title: 'Reels ve TikTok Algoritması (2025 Güncellemesi)',
    desc: 'Sosyal medya algoritmaları 2025 yılında nasıl çalışıyor? Etkileşimi ve organik erişimi artırmanın yolları.',
    date: '18 Mayıs 2025',
    readTime: '4-5 dk',
    content: [
      { type: 'p', text: '2025 yılında TikTok, Instagram Reels ve YouTube Shorts algoritmaları daha da akıllandı. Artık sadece popüler şarkılar ekleyip hashtag yazarak milyonlarca izlenmeye ulaşmak mümkün değil. Algoritma artık çok daha spesifik metrikleri inceliyor.' },
      { type: 'h2', text: '1. İzlenme Süresi (Watch Time) ve Tamamlama Oranı' },
      { type: 'p', text: 'Platformların tek bir amacı var: Kullanıcıyı uygulamada tutmak. Videonuzun kaç saniye izlendiği ve sonuna kadar izlenme oranı (Retention Rate) en önemli faktördür. Videolarınızda gereksiz boşlukları (dead air) kesmeli ve ritmi yüksek tutmalısınız.' },
      { type: 'h2', text: '2. İlk 3 Saniye Kancası (Hook)' },
      { type: 'p', text: 'Kullanıcı ekranı kaydırırken videonuzun ilk 3 saniyesinde görsel bir hareket, çarpıcı bir iddia veya ilgi çekici bir metin sunmazsanız videonuz geçilir. Algoritma hızlı geçilen (swipe away) videoları anında cezalandırır.' },
      { type: 'h2', text: '3. Kaydetme ve Paylaşma (Save & Share)' },
      { type: 'p', text: 'Beğeniler (Like) artık eski önemini yitirdi. Güncel algoritma, içeriğinizin ne kadar değerli olduğuna "Kaydetme" ve "Mesajla Paylaşma (Share)" oranlarına bakarak karar veriyor. İnsanların rehber niteliğinde kaydedebileceği veya arkadaşına "buna kesin bak" diyebileceği içerikler üretin.' },
      { type: 'h2', text: '4. Orijinal Ses ve Konuşma' },
      { type: 'p', text: 'Sadece trend müziklerin üzerine yazı yazmak yerine, orijinal sesinizle bilgi vermek ve hikaye anlatmak (storytelling) 2025\'te algoritmanın çok daha fazla ödüllendirdiği bir format. Hem samimi hem de otoriter bir iletişim kurmanızı sağlar.' }
    ]
  },
  {
    slug: 'high-ticket-satislar-icin-video-funnel',
    title: 'High-Ticket (Yüksek Fiyatlı) Satışlar İçin Video Funnel',
    desc: 'Premium hizmetler veya yüksek fiyatlı ürünler satanlar için müşteri itirazlarını kıran video huni (funnel) mimarisi.',
    date: '16 Mayıs 2025',
    readTime: '4-5 dk',
    content: [
      { type: 'p', text: 'Yüksek fiyatlı (high-ticket) bir hizmet veya ürün satıyorsanız (örneğin; kurumsal danışmanlık, lüks gayrimenkul, premium estetik cerrahi), insanları tek bir reklamla satın almaya ikna edemezsiniz. Bu noktada devreye karmaşık bir "Video Funnel" (Video Pazarlama Hunisi) girer.' },
      { type: 'h2', text: 'Aşama 1: Farkındalık (Top of Funnel - TOFU)' },
      { type: 'p', text: 'Burada amaç satış yapmak değil, hedef kitlenin dikkatini çekmektir. Kısa, merak uyandırıcı, doğrudan müşterinin yaşadığı en büyük acı noktasına (pain point) dokunan sosyal medya reklam videoları kullanılır. Hedef, kullanıcıyı sitenize çekmektir.' },
      { type: 'h2', text: 'Aşama 2: Değer Sunma ve İkna (Middle of Funnel - MOFU)' },
      { type: 'p', text: 'Sitenize veya açılış sayfanıza (landing page) gelen kullanıcıya, genellikle uzun (5-10 dakika arası) bir VSL (Video Sales Letter - Video Satış Mektubu) sunulur. Bu videoda otoritenizi kanıtlar, sisteminizin/hizmetinizin mantığını eğitici bir dille anlatır ve değer katarsınız.' },
      { type: 'h2', text: 'Aşama 3: Güven ve Karar (Bottom of Funnel - BOFU)' },
      { type: 'p', text: 'Kararsız kalan veya fiyatı yüksek bulan müşterilere yeniden pazarlama (retargeting) ile müşteri referans (case study) ve testimonial videoları gösterilir. Müşteri, "Bu yatırımı başkaları yaptı ve sonuç aldı, ben de alabilirim" diyerek satış toplantısı için randevu (lead) formunu doldurur.' },
      { type: 'h2', text: 'Sonuç' },
      { type: 'p', text: 'High-ticket satışlarda video, en güçlü satış personelinizdir. 7/24 çalışır, hiçbir itiraz karşısında yorulmaz ve markanızın premium algısını her tıklamada korur.' }
    ]
  },
  {
    slug: 'videolarda-ilk-3-saniye-kurali-hook',
    title: 'Videolarda İlk 3 Saniye Kuralı (Hook Stratejileri)',
    desc: 'İzleyicinin dikkatini anında yakalamak ve kaydırmasını (scroll) durdurmak için etkili kanca (hook) taktikleri.',
    date: '14 Mayıs 2025',
    readTime: '4-5 dk',
    content: [
      { type: 'p', text: 'Sosyal medyada ortalama dikkat süresi bir akvaryum balığından daha kısa hale geldi (yaklaşık 2.5 saniye). Kullanıcı akışta (feed) gezinirken videonuzun onu yakalayabilmesi için muazzam bir "Kanca (Hook)" stratejisine ihtiyacı vardır.' },
      { type: 'h2', text: 'Görsel Hook Nedir?' },
      { type: 'p', text: 'Videonun başladığı an hareketsiz durmak yapılabilecek en büyük hatadır. Çekim başlarken kameraya doğru yürümek, bir objeyi göstermek, hızlı bir geçiş (transition) yapmak veya aniden ekranda beliren çarpıcı bir pop-up yazı, gözün dikkatini anında çeker.' },
      { type: 'h2', text: 'Sözel Hook (Metin/Konuşma) Nedir?' },
      { type: 'p', text: '"Herkese merhaba, bugün sizlere..." diye başlayan bir video anında geçilir. Bunun yerine doğrudan izleyicinin bir problemine değinilmeli veya şaşırtıcı bir bilgi verilmelidir.' },
      { type: 'h3', text: 'Örnek Hook Şablonları:' },
      { type: 'ul', items: [
        '[Sektörünüzde] yaptığınız en büyük hata şu...',
        'Neden [X] yapmayı hemen bırakmalısınız?',
        '[Müşterinin hedefi]\'ne ulaşmak için bilmeniz gereken tek sır...',
        'Sadece 1 ayda [İstenen Sonuç]\'a nasıl ulaştık?'
      ]},
      { type: 'h2', text: 'Ritim ve Tempo (Pacing)' },
      { type: 'p', text: 'Sadece ilk 3 saniye değil, videonun genel ritmi de önemlidir. 3 saniyede yakaladığınız izleyiciyi, videonun geri kalanında sürekli değişen kamera açıları, B-roll (ara görüntüler) ve ses efektleriyle (swoosh, pop) tutmaya devam etmelisiniz.' }
    ]
  },
  {
    slug: 'kurumsal-youtube-kanali-acmak-isteyenlere-tavsiyeler',
    title: 'Kurumsal YouTube Kanalı Açmak İsteyenlere Tavsiyeler',
    desc: 'Şirketiniz için sıfırdan başarılı, izlenen ve müşteri getiren bir YouTube kanalı oluşturma rehberi.',
    date: '12 Mayıs 2025',
    readTime: '4-5 dk',
    content: [
      { type: 'p', text: 'YouTube, sadece eğlence değil aynı zamanda dünyanın en büyük ikinci arama motorudur. İnsanlar sorunlarına çözüm ararken veya büyük bir satın alma kararı öncesinde derinlemesine araştırma yapmak için YouTube\'u kullanır. Bu durum, şirketler için devasa bir fırsattır.' },
      { type: 'h2', text: '1. Sadece Şirket Haberleri Paylaşmayın' },
      { type: 'p', text: 'Kurumsal YouTube kanallarının en büyük hatası, sadece "yeni ofisimize taşındık" veya "CEO röportajı" gibi kimsenin aramadığı içerikler paylaşmalarıdır. YouTube stratejiniz, potansiyel müşterilerinizin Google\'da veya YouTube\'da arattığı sorulara "nasıl yapılır", "nedir" tarzında eğitici yanıtlar vermek üzerine kurulmalıdır.' },
      { type: 'h2', text: '2. Thumbnail ve Başlık (Tıklanma Oranı - CTR)' },
      { type: 'p', text: 'Videonuz dünyanın en kaliteli prodüksiyonuna sahip olsa bile, küçük resmi (thumbnail) ve başlığı ilgi çekici değilse kimse tıklamaz. Özel tasarlanmış, merak uyandıran grafikler ve A/B testleri ile optimize edilmiş başlıklar şarttır.' },
      { type: 'h2', text: '3. Yüksek Kaliteli Prodüksiyon (Aura)' },
      { type: 'p', text: 'Kötü ses kalitesi (yankılı veya cızırtılı bir mikrofon) izleyiciyi ilk 5 saniyede videodan kaçırır. Profesyonel aydınlatma, net ve derinlikli bir görüntü ve kaliteli ses kaydı, markanızın "premium ve güvenilir" algısı için zorunludur.' },
      { type: 'h2', text: '4. Tutarlılık ve Sabır' },
      { type: 'p', text: 'YouTube bir maratondur, depar değil. Kanalın algoritma tarafından fark edilmesi aylar alabilir. Düzenli olarak (örneğin haftada 1 video) kaliteli içerik yüklemek ve istikrarlı olmak başarının tek anahtarıdır.' }
    ]
  },
  {
    slug: 'kamera-karsisinda-rahat-konusma-teknikleri',
    title: 'Kamera Karşısında Rahat Konuşma Teknikleri',
    desc: 'CEO\'lar, uzmanlar ve marka yüzleri için kamera önü gerginliğini atıp doğal ve otoriter görünme ipuçları.',
    date: '10 Mayıs 2025',
    readTime: '4-5 dk',
    content: [
      { type: 'p', text: 'Alanınızda dünyanın en iyi uzmanı olabilirsiniz ancak kameranın o küçük siyah lensine bakmak en profesyonel insanları bile terletebilir. Endişelenmeyin; kamera önünde doğal durmak doğuştan gelen bir yetenek değil, öğrenilebilen bir kas becerisidir.' },
      { type: 'h2', text: '1. Prompter Kullanımını Ustalaştırmak' },
      { type: 'p', text: 'Ezber yapmak sizi robotik gösterir, tamamen doğaçlama yapmak ise konudan sapmanıza neden olur. Prompter, göz temasını kaybetmeden profesyonelce konuşmanızı sağlar. Sırrı şudur: Metni bir sunum gibi değil, bir arkadaşınıza kahve içerken anlatıyormuş gibi, duyguyu ve tonlamayı vererek okumalısınız.' },
      { type: 'h2', text: '2. Beden Dili ve Eller' },
      { type: 'p', text: 'Kamera önünde donuk kalmak enerjinizi düşürür. Ellerinizi kullanın (aşırıya kaçmadan), vücudunuzu hafifçe hareket ettirin. Bu, izleyiciye "rahatım ve bu konuya hakimim" mesajı verir.' },
      { type: 'h2', text: '3. Profesyonel Ekibin Yönlendirmesi' },
      { type: 'p', text: 'İyi bir yönetmen, sadece "Kayıt!" demez. Çekim öncesinde sizinle sohbet eder, sizi rahatlatır, omuzlarınızı düşürmenizi ve gülümsemenizi sağlar. Fenerbahçe kalecisi kadar stresli hissettiğiniz bir anı, profesyonel bir prodüksiyon ekibi sıfır stresli eğlenceli bir anıya dönüştürür.' },
      { type: 'h2', text: '4. Mükemmel Olmaya Çalışmayın' },
      { type: 'p', text: 'Ufak dil sürçmeleri, doğal esler veya nefes alışlar sizi "insan" yapar. İzleyiciler yapay mükemmellikten çok samimiyete bağlanır. Kendinize hata yapma izni verin; sonuçta dijital kurgu (montaj) bunun için var!' }
    ]
  }
];

function generateBlogContent(blog) {
  let jsxContent = `import type { Metadata } from "next";
import { ArrowLeft, Clock, Calendar, User, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import WizardCta from "@/components/WizardCta";

export const metadata: Metadata = {
  title: "${blog.title} — Fennix Medya",
  description: "${blog.desc}",
  alternates: { canonical: "https://fennixmedya.com/blog/${blog.slug}" },
};

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/blog" className="hover:text-primary transition-colors flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" /> Blog
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="truncate">{"${blog.title}"}</span>
        </div>

        <header className="mb-12">
          <h1 className="font-heading text-3xl md:text-5xl font-black mb-6 leading-tight">
            ${blog.title}
          </h1>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground border-y border-border/50 py-4">
            <span className="flex items-center gap-1"><User className="w-4 h-4" /> Semih Hasanoğlu</span>
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> ${blog.date}</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> ${blog.readTime} okuma</span>
          </div>
        </header>

        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-heading prose-headings:font-bold prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-2xl prose-img:border prose-img:border-white/10 prose-p:text-muted-foreground prose-li:text-muted-foreground">
          ${blog.content.map(c => {
            if (c.type === 'h2') return `<h2>${c.text}</h2>`;
            if (c.type === 'h3') return `<h3>${c.text}</h3>`;
            if (c.type === 'p') return `<p>${c.text}</p>`;
            if (c.type === 'ul') {
              return `<ul>${c.items.map(i => `<li>${i}</li>`).join('')}</ul>`;
            }
          }).join('\\n          ')}
        </div>

        <div className="mt-16 pt-10 border-t border-border">
          <div className="bg-card border border-white/5 p-8 rounded-3xl text-center shadow-2xl">
            <h3 className="font-heading text-2xl font-bold mb-4">Markanızın hikayesini anlatmaya hazır mısınız?</h3>
            <p className="text-muted-foreground mb-8">
              Stratejik içerik üretimi ve profesyonel video prodüksiyonu ile rakiplerinizin bir adım önüne geçin.
            </p>
            <WizardCta text="Hemen Ücretsiz Strateji Görüşmesi Al" />
          </div>
        </div>
      </div>
    </div>
  );
}
`;
  return jsxContent;
}

const baseDir = '/Users/semih/Documents/fennix-nextjs/src/app/blog';

// Write individual blog files
blogs.forEach(blog => {
  const dirPath = path.join(baseDir, blog.slug);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  fs.writeFileSync(path.join(dirPath, 'page.tsx'), generateBlogContent(blog));
});

console.log('Successfully generated 10 new blog posts!');
