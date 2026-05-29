import { Clock } from "lucide-react";

interface LastUpdatedProps {
  date: string;
}

export default function LastUpdated({ date }: LastUpdatedProps) {
  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground/80 mb-6">
      <Clock className="w-4 h-4" />
      <time dateTime={date}>Son Güncelleme: {new Date(date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
    </div>
  );
}
