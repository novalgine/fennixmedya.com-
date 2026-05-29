import { Sparkles } from "lucide-react";

interface TldrSummaryProps {
  title?: string;
  points: string[];
}

export default function TldrSummary({ title = "Hızlı Özet (TL;DR)", points }: TldrSummaryProps) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-gold opacity-5 blur-3xl rounded-full group-hover:opacity-10 transition-opacity duration-500" />
      
      <div className="flex items-center gap-3 mb-4 relative z-10">
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-gold">
          <Sparkles className="w-4 h-4 text-black" />
        </div>
        <h2 className="font-heading font-bold text-lg text-foreground">{title}</h2>
      </div>
      
      <ul className="space-y-3 relative z-10">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-3 text-muted-foreground">
            <span className="text-primary font-bold mt-0.5">•</span>
            <span className="leading-relaxed">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
