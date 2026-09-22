export interface Testimonial {
  id: string;
  name: string;
  title: string;
  quote: string;
  videoSrc: string;
  poster: string;
}

// Yalnızca gerçek, videosu olan müşteri referansları.
export const testimonialsData: Testimonial[] = [
  {
    id: "esranur",
    name: "Esranur Umurbeyli",
    title: "Kimyager · Doğal Köpükler",
    quote: "Semih Bey çok farklıydı. Sizin hayatınızı, kriterlerinizi, kişiliğinizi tamamen bir bütün olarak ele alıp size ona göre bir program belirliyor. Her zaman olaya sadece iş olarak bakmıyor. Hayatın bir bütünü olarak bakıyor.",
    videoSrc: "/videos/referans/esranur.mp4",
    poster: "/videos/referans/esranur.jpg",
  },
  {
    id: "orhan",
    name: "Orhan Yardım",
    title: "Kurucu, Boogold",
    quote: "Bana hazır içerikler vermedi. Klasik ajans mantığında olduğu gibi beni yok etmiyor. Kendi kişiliğimle, kendi şeklimle, kendi tarzımla kendimi anlatmam noktasında çok ciddi anlamda bana yönlendirmeler yapıyor.",
    videoSrc: "/videos/referans/orhan.mp4",
    poster: "/videos/referans/orhan.jpg",
  },
  {
    id: "mukaddes",
    name: "Mukaddes Doman",
    title: "Mukaddes Storytelling",
    quote: "Bütün yüksek bütçeli müşterilerimi Semih'le video çekmeye başladıktan sonra bulduk. … Çekimlerde asla kasılmadım, asla prompter okumadım. Yeri geldi karşıma bir dinleyici gibi geçti, yeri geldi bir müşteri gibi geçti.",
    videoSrc: "/videos/referans/mukaddes.mp4",
    poster: "/videos/referans/mukaddes.jpg",
  },
  {
    id: "berke",
    name: "Berke Derelioğlu",
    title: "Kurucu, Sistemler.io",
    quote: "Eğer siz de yoğun bir işletme sahibiyseniz ve içerik üretecek vaktiniz yoksa Semih'ten yardım almanızı tavsiye ederim. Gerçekten işinde profesyonel. Sizi doğru bir şekilde yönlendiriyor ve başarıya ulaştırıyor.",
    videoSrc: "/videos/referans/berke.mp4",
    poster: "/videos/referans/berke.jpg",
  },
];
