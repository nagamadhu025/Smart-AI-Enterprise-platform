import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div style={styles.sidebar}>
      <h2 style={styles.logo}>Smart AI</h2>

      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Dashboard</Link>
        <Link to="/ai/chat" style={styles.link}>AI Chat</Link>
        <Link to="/documents/upload" style={styles.link}>Upload Docs</Link>
        <Link to="/documents/list" style={styles.link}>Documents</Link>
      </nav>
    </div>
  );
}

const styles = {
  sidebar: {
    width: "220px",
    background: "#111827",
    color: "#fff",
    minHeight: "100vh",
    padding: "20px",
  },
  logo: {
    marginBottom: "30px",
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  link: {
    color: "#e5e7eb",
    textDecoration: "none",
  },
};
