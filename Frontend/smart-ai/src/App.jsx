import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Chat from "./pages/AI/Chat";
import History from "./pages/AI/History";
import Upload from "./pages/Documents/Upload";
 import List from "./pages/Documents/List";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
         <Route path="/ai/chat" element={<Chat />} />
       <Route path="/ai/history" element={<History />} />
          <Route path="/documents/upload" element={<Upload />} />
        <Route path="/documents/list" element={<List />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
