import { Play, MonitorPlay, Building2, MonitorSpeaker, type LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  color: string;
  border: string;
}

export const services: Service[] = [
  {
    id: "sosyal-medya-video",
    title: "Sosyal Medya Videosu",
    description: "Instagram, TikTok ve reklam kampanyaları için kısa ve etkili videolar.",
    icon: Play,
    href: "/hizmetler/sosyal-medya-video",
    color: "from-blue-500/20 to-purple-500/20",
    border: "group-hover:border-blue-500/50",
  },
  {
    id: "kurumsal-tanitim-filmi",
    title: "Kurumsal Tanıtım Filmi",
    description: "Markanızın hikayesini en prestijli şekilde anlatan sinematik filmler.",
    icon: Building2,
    href: "/hizmetler/kurumsal-tanitim-filmi",
    color: "from-amber-500/20 to-orange-500/20",
    border: "group-hover:border-amber-500/50",
  },
  {
    id: "youtube-icerik-uretimi",
    title: "YouTube İçerik Üretimi",
    description: "Kanalınızı büyütecek algoritma uyumlu içerik mimarisi.",
    icon: MonitorPlay,
    href: "/hizmetler/youtube-icerik-uretimi",
    color: "from-red-500/20 to-rose-500/20",
    border: "group-hover:border-red-500/50",
  },
  {
    id: "anahtar-teslim-studyo",
    title: "Anahtar Teslim Stüdyo",
    description: "Tek tuşla sinematik içerik üretebileceğiniz kişisel stüdyo kurulumu.",
    icon: MonitorSpeaker,
    href: "/hizmetler/anahtar-teslim-studyo",
    color: "from-emerald-500/20 to-teal-500/20",
    border: "group-hover:border-emerald-500/50",
  },
];
