export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(15,23,42,0.08)",
        backgroundColor: "transparent",
        padding: "28px 0",
      }}
    >
      <div
        className="container-wide footer-inner"
        style={{
          minHeight: "48px",
        }}
      >
        {/* Logo */}
        <span
          style={{
            fontWeight: 800,
            fontSize: "1rem",
            letterSpacing: "0.08em",
            color: "var(--foreground)",
          }}
        >
          TILNOTE
        </span>

        {/* Copyright */}
        <span
          style={{
            fontSize: "0.8rem",
            color: "var(--muted)",
            textAlign: "center",
            flex: "1 1 auto",
          }}
        >
          © 2026 TILNOTE. All rights reserved.
        </span>

        {/* Links */}
        <nav
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
          }}
        >
          {[
            { label: "개인정보처리방침", href: "#" },
            { label: "이용약관", href: "#" },
            { label: "문의하기", href: "#" },
          ].map(({ label, href }) => (
            <a key={label} href={href} className="footer-link">
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
