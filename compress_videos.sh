#!/bin/bash

# Hedef klasörleri oluştur
mkdir -p public/videos/portfolyo
mkdir -p public/videos/referans

SRC_REF="/Users/semih/Desktop/siteiçinvideolar/referans videoları (testimonial)"
SRC_DIKEY="/Users/semih/Desktop/siteiçinvideolar/Portfolyo/dikey"
SRC_YATAY="/Users/semih/Desktop/siteiçinvideolar/Portfolyo/yatay"

DEST_REF="public/videos/referans"
DEST_PORT="public/videos/portfolyo"

# Sıkıştırma ayarları (web için optimize edilmiş x264, crf 28 ile iyi sıkıştırma, aac ses)
FFMPEG_CMD="ffmpeg -y -v warning"
FFMPEG_OPTS="-vcodec libx264 -crf 30 -preset fast -acodec aac -b:a 128k -movflags +faststart -vf scale=-2:1080"
# Scale -2:1080 ensures max height is 1080p, maintaining aspect ratio. 

echo "Baskı başlıyor..."

# Referanslar
$FFMPEG_CMD -i "$SRC_REF/Esranur Hanım referans video.mp4" $FFMPEG_OPTS "$DEST_REF/esranur.mp4" &
$FFMPEG_CMD -i "$SRC_REF/orhan yardım (boogold kuyumculuk) referans videosu.mp4" $FFMPEG_OPTS "$DEST_REF/orhan.mp4" &
$FFMPEG_CMD -i "$SRC_REF/Mukaddes Hanım referans video.mp4" $FFMPEG_OPTS "$DEST_REF/mukaddes.mp4" &

# Portfolyo Dikey
$FFMPEG_CMD -i "$SRC_DIKEY/Vaveyla Home videosu.mp4" $FFMPEG_OPTS "$DEST_PORT/vaveyla.mp4" &
$FFMPEG_CMD -i "$SRC_DIKEY/Umay Hanım video.mp4" $FFMPEG_OPTS "$DEST_PORT/umay.mp4" &
$FFMPEG_CMD -i "$SRC_DIKEY/Boogold kuyumculuk video.mp4" $FFMPEG_OPTS "$DEST_PORT/boogold.mp4" &
$FFMPEG_CMD -i "$SRC_DIKEY/Melis Ulaş wellness video.mp4" $FFMPEG_OPTS "$DEST_PORT/melis.mp4" &
$FFMPEG_CMD -i "$SRC_DIKEY/vethouse video.mp4" $FFMPEG_OPTS "$DEST_PORT/vethouse.mp4" &
$FFMPEG_CMD -i "$SRC_DIKEY/Buzdagı suları video.mp4" $FFMPEG_OPTS "$DEST_PORT/buzdagi.mp4" &
$FFMPEG_CMD -i "$SRC_DIKEY/Afifeturnetanıtım.mp4" $FFMPEG_OPTS "$DEST_PORT/afife.mp4" &

# Portfolyo Yatay
$FFMPEG_CMD -i "$SRC_YATAY/petadress tanıtım filmi.mp4" $FFMPEG_OPTS "$DEST_PORT/petadress.mp4" &

echo "Tüm işlemler arkaplana atıldı, bekleniyor..."
wait
echo "Sıkıştırma tamamlandı!"
