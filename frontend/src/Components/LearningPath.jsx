import React, { useEffect, useState } from "react";

const LearningPath = () => {
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");

  useEffect(() => {
    // Replace with your actual API endpoint
    fetch("http://localhost:3000/api/chapters")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setChapters(data.chapters);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch chapters", err);
        setLoading(false);
      });
  }, []);

  const filterChapters = (difficulty) => {
    if (difficulty === "All") return chapters;
    return chapters.filter((c) => c.difficulty === difficulty);
  };

  if (loading) return <div>Loading Learning Modules...</div>;

  return (
    <div className="learning-container" style={{ padding: "20px" }}>
      <h1>Agricultural Learning Path</h1>
      <p>Master farming concepts from Basic to Advanced.</p>

      <div className="filters" style={{ marginBottom: "20px" }}>
        {["All", "Basic", "Intermediate", "Advanced"].map((level) => (
          <button
            key={level}
            onClick={() => setSelectedDifficulty(level)}
            style={{
              marginRight: "10px",
              padding: "8px 16px",
              backgroundColor: selectedDifficulty === level ? "#4CAF50" : "#ddd",
              color: selectedDifficulty === level ? "white" : "black",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            {level}
          </button>
        ))}
      </div>

      <div className="chapters-grid" style={{ display: "grid", gap: "20px" }}>
        {filterChapters(selectedDifficulty).map((chapter) => (
          <div
            key={chapter._id}
            className="chapter-card"
            style={{
              border: "1px solid #eee",
              borderRadius: "8px",
              padding: "20px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>{chapter.title}</h3>
              <span
                style={{
                  fontSize: "0.8em",
                  color: "#666",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                }}
              >
                {chapter.difficulty}
              </span>
            </div>
            <p>{chapter.description}</p>
            
            {chapter.diagramUrl && (
              <div style={{ margin: "15px 0", textAlign: "center" }}>
                <img
                  src={chapter.diagramUrl}
                  alt={`Diagram for ${chapter.title}`}
                  style={{ maxWidth: "100%", maxHeight: "300px", borderRadius: "4px" }}
                />
                <p style={{ fontSize: "0.9em", color: "#555", fontStyle: "italic" }}>
                  Figure: Visual representation of {chapter.title}
                </p>
              </div>
            )}

            <div className="content">
              <p>{chapter.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningPath;