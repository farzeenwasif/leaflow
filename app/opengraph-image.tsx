import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const alt = `${siteConfig.name} — online accounting for freelancers & small businesses`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Social-share card, generated at build time. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "linear-gradient(135deg, #e8faf2 0%, #ffffff 55%, #f4f1ff 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="84" height="84" viewBox="0 0 40 40">
            <path d="M16 33C6 29 2 18 6 6C17 9 22 21 16 33Z" fill="#b69aff" />
            <path d="M10 35C10 20 20 9 35 8C35 23 25 34 10 35Z" fill="#22bc69" />
            <path d="M14.5 30.5L20 24.5L23.5 27L30 15.5" fill="none" stroke="#fff" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="30.3" cy="15" r="2.4" fill="#ffe34f" />
          </svg>
          <div style={{ fontSize: 48, fontWeight: 800, color: "#1d1d1d" }}>{siteConfig.name}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 68, fontWeight: 800, color: "#1d1d1d", lineHeight: 1.1, maxWidth: 950 }}>
            Accounting that runs itself, with an expert by your side
          </div>
          <div style={{ fontSize: 30, color: "#5f6368" }}>Certified accountants · 100% online · No commitment</div>
        </div>
      </div>
    ),
    size,
  );
}
