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
    title: "Doğal Sabun Uzmanı",
    quote: "Kamera karşısına geçtiğimde doğru açıyı bulmak ve doğru ışığı ayarlamak bana çok zaman kaybettiriyordu. Fennix ile çalışmaya başladıktan sonra tamamen mesleğime odaklanabildim.",
    videoSrc: "/videos/referans/esranur.mp4",
    poster: "/videos/referans/esranur.jpg",
  },
  {
    id: "orhan",
    name: "Orhan Yardım",
    title: "Kurucu, Boogold",
    quote: "İçeriklerin kalitesi doğrudan markamızın algısını yukarı taşıdı. Sadece çekim değil, içerik stratejisi konusunda da büyük bir yükü omuzlarımızdan aldılar.",
    videoSrc: "/videos/referans/orhan.mp4",
    poster: "/videos/referans/orhan.jpg",
  },
  {
    id: "mukaddes",
    name: "Mukaddes Doman",
    title: "Mukaddes Storytelling",
    quote: "Her şey çok profesyonel, pürüzsüz ve planlı işliyor. Aklımdaki fikri tam olarak ekrana yansıtmamı sağlayan harika bir vizyonları var. Ortaya çıkan işten son derece memnunum.",
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
