import { useState } from "react";
import DashboardLayout from "@/layout/DashboardLayout";

export default function Chat() {
  const [messages, setMessages] = useState([
    { role: "ai", text: "Hello 👋 How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // TEMP AI RESPONSE (mock)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "ai", text: "This is a mock AI response 🤖" },
      ]);
    }, 600);
  };

  return (
    <DashboardLayout>
      <h1 style={{ marginBottom: "10px" }}>AI Chat</h1>

      <div style={styles.chatBox}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              ...styles.message,
              alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
              background: msg.role === "user" ? "#2563eb" : "#e5e7eb",
              color: msg.role === "user" ? "#fff" : "#000",
            }}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div style={styles.inputArea}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
          style={styles.input}
        />
        <button onClick={sendMessage} style={styles.button}>
          Send
        </button>
      </div>
    </DashboardLayout>
  );
}

const styles = {
  chatBox: {
    height: "400px",
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
    padding: "15px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    overflowY: "auto",
    background: "#f9fafb",
  },
  message: {
    maxWidth: "70%",
    padding: "10px 14px",
    borderRadius: "10px",
  },
  inputArea: {
    display: "flex",
    gap: "10px",
    marginTop: "15px",
  },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #d1d5db",
  },
  button: {
    padding: "10px 18px",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};
