const FooterStrip = () => {
  return (
    <footer
      className="bg-brand2  w-full"
      style={{
        color: "#ffffff",
        padding: "12px 20px",
        fontSize: "14px",
        textAlign: "center",
      }}
    >
      <span style={{ color: "#00c853", fontWeight: 500 }}>
        SOFT-TECH SOLUTIONS © 2014 - 2026
      </span>{" "}
      - All rights reserved |{" "}
      <a href="#" style={linkStyle}>
        T&C
      </a>{" "}
      |{" "}
      <a href="#" style={linkStyle}>
        Privacy Policy
      </a>{" "}
      |{" "}
      <a href="#" style={linkStyle}>
        Sitemap
      </a>{" "}
      | GST-IN : 24ACUFS8893B1ZH{" "}
      <span style={{ marginLeft: "8px" }}>ⓘ 159,982</span>
    </footer>
  );
};

export default FooterStrip;
const linkStyle: React.CSSProperties = {
  color: "#ffffff",
  textDecoration: "none",
};
