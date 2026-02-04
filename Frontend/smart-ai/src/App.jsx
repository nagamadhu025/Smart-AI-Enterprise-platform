import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Chat from "./pages/AI/Chat";
import History from "./pages/History";
import Documents from "./pages/Documents";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/ai/chat" element={<Chat />} />
        <Route path="/ai/history" element={<History />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
