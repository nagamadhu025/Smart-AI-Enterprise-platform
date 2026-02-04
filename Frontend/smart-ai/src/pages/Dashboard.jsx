import DashboardLayout from "@/layout/DashboardLayout";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <h1 style={{ marginBottom: "20px" }}>Dashboard</h1>

      <div style={styles.grid}>
        <Card title="AI Chats" value="124" />
        <Card title="Documents" value="18" />
        <Card title="AI Requests" value="542" />
        <Card title="Users" value="5" />
      </div>
    </DashboardLayout>
  );
}

function Card({ title, value }) {
  return (
    <div style={styles.card}>
      <h3>{title}</h3>
      <p style={styles.value}>{value}</p>
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
  },
  card: {
    background: "#ffffff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
  },
  value: {
    fontSize: "28px",
    fontWeight: "bold",
    marginTop: "10px",
  },
};
