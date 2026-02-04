import DashboardLayout from "@/layout/DashboardLayout";

export default function History() {
  const chats = [
    { id: 1, question: "What is AI?", date: "2026-02-01" },
    { id: 2, question: "Explain React hooks", date: "2026-02-02" },
    { id: 3, question: "Summarize my PDF", date: "2026-02-03" },
  ];

  return (
    <DashboardLayout>
      <h1>Chat History</h1>

      <div style={styles.list}>
        {chats.map((chat) => (
          <div key={chat.id} style={styles.card}>
            <h3>{chat.question}</h3>
            <small>{chat.date}</small>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}

const styles = {
  list: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    marginTop: "20px",
  },
  card: {
    background: "#fff",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
  },
};
