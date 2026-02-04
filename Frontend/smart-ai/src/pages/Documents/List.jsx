import DashboardLayout from "@/layout/DashboardLayout";

export default function List() {
  const documents = [
    { id: 1, name: "AI_notes.pdf", size: "2.3 MB" },
    { id: 2, name: "React_Guide.pdf", size: "1.1 MB" },
    { id: 3, name: "Project_Requirements.txt", size: "12 KB" },
  ];

  return (
    <DashboardLayout>
      <h1>Documents</h1>

      <table style={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Size</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc) => (
            <tr key={doc.id}>
              <td>{doc.name}</td>
              <td>{doc.size}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </DashboardLayout>
  );
}

const styles = {
  table: {
    width: "100%",
    marginTop: "20px",
    borderCollapse: "collapse",
  },
  thtd: {
    border: "1px solid #e5e7eb",
    padding: "10px",
  },
};
