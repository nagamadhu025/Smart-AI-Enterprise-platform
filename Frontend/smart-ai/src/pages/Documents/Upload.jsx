import { useState } from "react";
import DashboardLayout from "@/layout/DashboardLayout";

export default function Upload() {
  const [file, setFile] = useState(null);

  const handleUpload = () => {
    if (!file) return alert("Please select a file");
    alert(`Uploaded: ${file.name}`);
  };

  return (
    <DashboardLayout>
      <h1>Upload Document</h1>

      <div style={styles.box}>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button onClick={handleUpload} style={styles.button}>
          Upload
        </button>
      </div>
    </DashboardLayout>
  );
}

const styles = {
  box: {
    marginTop: "20px",
    display: "flex",
    gap: "15px",
    alignItems: "center",
  },
  button: {
    padding: "8px 16px",
    background: "#16a34a",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};
