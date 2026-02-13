import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [puzzle, setPuzzle] = useState(null);
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/daily-puzzle")
      .then(res => setPuzzle(res.data));
  }, []);

  const submitAnswer = () => {
    axios.post("http://127.0.0.1:5000/check-answer", {
      puzzle_id: puzzle.id,
      answer: answer
    }).then(res => setResult(res.data.result));
  };

  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>🧩 Daily Puzzle Logic Game</h1>

      {puzzle && (
        <>
          <h3>{puzzle.question}</h3>

          <input
            placeholder="Enter answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />

          <br /><br />

          <button onClick={submitAnswer}>Submit</button>
          <button onClick={() => alert(puzzle.hint)}>Hint</button>

          <h2>
            {result === "correct" && "✅ Correct!"}
            {result === "wrong" && "❌ Wrong!"}
          </h2>
        </>
      )}
    </div>
  );
}

export default Home;
