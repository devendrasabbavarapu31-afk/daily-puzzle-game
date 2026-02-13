function Home() {
  return (
    <div style={{ maxWidth: 600, margin: "80px auto" }}>
      <div
        style={{
          background: "var(--bs-bg)",
          border: "1px solid var(--bs-border)",
          borderRadius: 12,
          padding: 30,
          boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
        }}
      >
        <h1 style={{ color: "var(--bs-primary)", marginBottom: 10 }}>
          🧩 Daily Puzzle Logic Game
        </h1>

        <p style={{ marginBottom: 20 }}>
          Solve one logic puzzle every day and build your streak.
        </p>

        <div
          style={{
            padding: 16,
            background: "var(--bs-secondary)",
            borderRadius: 8,
            marginBottom: 20,
          }}
        >
          <strong>Today's Puzzle:</strong>
          <p style={{ marginTop: 8 }}>
            What number comes next in the sequence?  
            <br />
            <b>2, 4, 8, 16, ?</b>
          </p>
        </div>

        <button
          style={{
            background: "var(--bs-primary)",
            color: "#fff",
            border: "none",
            padding: "12px 20px",
            borderRadius: 8,
            fontSize: 16,
            cursor: "pointer",
          }}
        >
          Submit Answer
        </button>
      </div>
    </div>
  );
}

export default Home;
