export interface Testimonial {
  id: string;
  name: string;
  title: string;
  quote: string;
  videoSrc: string;
  poster: string;
  avatar: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "esranur",
    name: "Esranur Umurbeyli",
    title: "Doğal Sabun Uzmanı",
    quote: "Kamera karşısına geçtiğimde doğru açıyı bulmak ve doğru ışığı ayarlamak bana çok zaman kaybettiriyordu. Fennix ile çalışmaya başladıktan sonra tamamen mesleğime odaklanabildim.",
    videoSrc: "/videos/referans/esranur.mp4",
    poster: "/videos/referans/esranur.jpg",
    avatar: "/avatars/female.png",
  },
  {
    id: "orhan",
    name: "Orhan Yardım",
    title: "Kurucu, Boogold",
    quote: "İçeriklerin kalitesi doğrudan markamızın algısını yukarı taşıdı. Sadece çekim değil, içerik stratejisi konusunda da büyük bir yükü omuzlarımızdan aldılar.",
    videoSrc: "/videos/referans/orhan.mp4",
    poster: "/videos/referans/orhan.jpg",
    avatar: "/avatars/male.png",
  },
  {
    id: "mukaddes",
    name: "Mukaddes Gün",
    title: "Mukaddes Storytelling",
    quote: "Her şey çok profesyonel, pürüzsüz ve planlı işliyor. Aklımdaki fikri tam olarak ekrana yansıtmamı sağlayan harika bir vizyonları var. Ortaya çıkan işten son derece memnunum.",
    videoSrc: "/videos/referans/mukaddes.mp4",
    poster: "/videos/referans/mukaddes.jpg",
    avatar: "/avatars/female.png",
  },
  {
    id: "ahmet",
    name: "Ahmet Yılmaz",
    title: "Diş Hekimi",
    quote: "Sosyal medyada hasta güvenini kazanmak için profesyonel içerikler şarttı. Fennix ekibi sayesinde kliniğimin kalitesini dijitale çok iyi yansıttık.",
    videoSrc: "",
    poster: "",
    avatar: "/avatars/male.png",
  },
  {
    id: "zeynep",
    name: "Zeynep Kaya",
    title: "Emlak Danışmanı",
    quote: "Portföy videolarımın sinematik kalitesi sayesinde lüks konut satışlarımda inanılmaz bir ivme yakaladım. Anahtar teslim sistemleri gerçekten hayat kurtarıyor.",
    videoSrc: "",
    poster: "",
    avatar: "/avatars/female.png",
  },
  {
    id: "mert",
    name: "Mert Yılmaz",
    title: "Kurucu, Mert Design",
    quote: "Fennix Medya ile çalışmak işimizi bir üst seviyeye taşıdı. Video içeriklerimiz artık hem premium hissettiriyor hem de doğrudan satışa dönüyor. Harika bir iş çıkardılar.",
    videoSrc: "",
    poster: "",
    avatar: "/avatars/male.png",
  }
];
