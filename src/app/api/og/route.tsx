import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#050505",
            color: "#ffffff",
            padding: "40px 60px",
            border: "8px solid #00D600",
            position: "relative",
          }}
        >
          {/* Subtle glowing radial background */}
          <div
            style={{
              position: "absolute",
              top: "-200px",
              left: "-200px",
              width: "600px",
              height: "600px",
              borderRadius: "500px",
              background: "radial-gradient(circle, rgba(0, 214, 0, 0.08) 0%, transparent 70%)",
              display: "flex",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-200px",
              right: "-200px",
              width: "600px",
              height: "600px",
              borderRadius: "500px",
              background: "radial-gradient(circle, rgba(0, 214, 0, 0.08) 0%, transparent 70%)",
              display: "flex",
            }}
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "24px",
              backgroundColor: "rgba(16, 16, 16, 0.8)",
              padding: "60px 80px",
              textAlign: "center",
              boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
              maxWidth: "1000px",
              width: "100%",
            }}
          >
            {/* Tagline */}
            <div
              style={{
                fontSize: "18px",
                color: "#00D600",
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: "3px",
                marginBottom: "20px",
              }}
            >
              Available for Freelance & Contract
            </div>

            {/* Name */}
            <div
              style={{
                fontSize: "72px",
                fontWeight: 900,
                marginBottom: "15px",
                display: "flex",
              }}
            >
              Satyam Tiwari
            </div>

            {/* Subtitle */}
            <div
              style={{
                fontSize: "24px",
                color: "#A0A0A0",
                maxWidth: "700px",
                lineHeight: "1.4",
                marginBottom: "35px",
              }}
            >
              Full Stack Developer | Mobile App Developer | Cyber Security Consultant
            </div>

            {/* Tags */}
            <div
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {["React Native", "Next.js", "TypeScript", "Cyber Security", "Cloud DevOps"].map((tech) => (
                <div
                  key={tech}
                  style={{
                    backgroundColor: "rgba(0, 214, 0, 0.05)",
                    border: "1px solid rgba(0, 214, 0, 0.2)",
                    borderRadius: "8px",
                    padding: "8px 20px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: "#00D600",
                  }}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch {
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
