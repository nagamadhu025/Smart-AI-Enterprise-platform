import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({ children }) {
  return (
    <div style={styles.container}>
      <Sidebar />

      <div style={styles.main}>
        <Navbar />
        <div style={styles.content}>{children}</div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
  },
  main: {
    flex: 1,
  },
  content: {
    padding: "20px",
  },
};
