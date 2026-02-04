export default function Navbar() {
  return (
    <div style={styles.navbar}>
      <h3>Dashboard</h3>
      <div>User</div>
    </div>
  );
}

const styles = {
  navbar: {
    height: "60px",
    background: "#f9fafb",
    borderBottom: "1px solid #e5e7eb",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
  },
};
