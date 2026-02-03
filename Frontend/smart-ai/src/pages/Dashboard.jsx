import Chat from "./AI/Chat";
import History from "./AI/History";
import Upload from "./Documents/Upload";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to Smart AI</p>
       <Chat></Chat>
       <History></History>
       <Upload></Upload>
    </div>
  );
}
