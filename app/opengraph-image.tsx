import { ImageResponse } from "next/og"

export const alt =
  "SNS Education — Estude na Parul University, Índia, com bolsa de 50% e sem taxa de agência"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

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
          padding: "72px 80px",
          background: "#f9f6ef",
          color: "#1b3a30",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#1f4d3e",
              color: "#f9f6ef",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            SNS
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 30, fontWeight: 700 }}>SNS Education</div>
            <div style={{ fontSize: 22, color: "#4b6a5f" }}>Student Next Step</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.08, maxWidth: 980 }}>
            Estude na Parul University, Índia
          </div>
          <div style={{ fontSize: 30, color: "#4b6a5f", maxWidth: 940, lineHeight: 1.35 }}>
            Acompanhamento completo do Offer Letter até à chegada ao campus.
          </div>
        </div>

        <div style={{ display: "flex", gap: 16 }}>
          {["Bolsa de 50%", "Sem taxa de agência", "Visto e bilhete"].map((label) => (
            <div
              key={label}
              style={{
                display: "flex",
                padding: "14px 26px",
                borderRadius: 999,
                fontSize: 24,
                fontWeight: 600,
                background: label === "Bolsa de 50%" ? "#e8b84a" : "#1f4d3e",
                color: label === "Bolsa de 50%" ? "#1b3a30" : "#f9f6ef",
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  )
}
