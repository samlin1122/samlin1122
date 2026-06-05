export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body
        style={{
          background: "#0e0c0b",
          color: "#f5f0ea",
          fontFamily: "system-ui, sans-serif",
          display: "flex",
          minHeight: "100vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "3rem", color: "#e8845b" }}>404</h1>
          <a href="/" style={{ color: "#e8845b" }}>
            Back home
          </a>
        </div>
      </body>
    </html>
  );
}
