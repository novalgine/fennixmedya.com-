import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Fennix Medya — Premium Video Prodüksiyon, İstanbul";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const GOLD = "#CEB77E";
const GOLD_LIGHT = "#E6D7B3";

export default async function Image() {
  const bigShoulders = await readFile(
    join(process.cwd(), "src/assets/fonts/BigShoulders-Bold.ttf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A0A0A",
          backgroundImage:
            "radial-gradient(circle at 50% 120%, rgba(206,183,126,0.25) 0%, rgba(206,183,126,0.08) 40%, rgba(10,10,10,0) 70%)",
          fontFamily: "Big Shoulders",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "28px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "72px",
              height: "2px",
              background: `linear-gradient(90deg, rgba(206,183,126,0) 0%, ${GOLD} 100%)`,
            }}
          />
          <div
            style={{
              fontSize: "26px",
              letterSpacing: "12px",
              color: GOLD,
            }}
          >
            PREMIUM VIDEO PRODÜKSİYON
          </div>
          <div
            style={{
              width: "72px",
              height: "2px",
              background: `linear-gradient(90deg, ${GOLD} 0%, rgba(206,183,126,0) 100%)`,
            }}
          />
        </div>

        <div
          style={{
            fontSize: "172px",
            color: "#F5F0E6",
            letterSpacing: "0px",
            lineHeight: 1,
            display: "flex",
          }}
        >
          FENNIX
          <span style={{ color: GOLD_LIGHT, marginLeft: "28px" }}>MEDYA</span>
        </div>

        <div
          style={{
            marginTop: "48px",
            fontSize: "30px",
            color: "rgba(245,240,230,0.75)",
            display: "flex",
          }}
        >
          Sektörünüzde Otorite İnşa Eden Videolar
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "44px",
            fontSize: "24px",
            letterSpacing: "4px",
            color: "rgba(206,183,126,0.8)",
            display: "flex",
          }}
        >
          fennixmedya.com · İstanbul
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Big Shoulders", data: bigShoulders, style: "normal", weight: 700 },
      ],
    }
  );
}
