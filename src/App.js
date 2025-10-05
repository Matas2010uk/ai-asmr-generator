import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");

  const handleGenerate = async () => {
    setResult("🎧 Generating ASMR video for: " + prompt + " ...");

    // Simulate generation delay
    setTimeout(() => {
      setResult(
        `✅ Your ${prompt} ASMR video has been generated successfully!`
      );
    }, 3000);
  };

  return (
    <div className="container">
      <h1>AI ASMR Video Generator 🎧</h1>
      <input
        type="text"
        placeholder="Enter ASMR theme (e.g., Rain, Typing, Ocean)"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button onClick={handleGenerate}>Generate</button>
      <p className="result">{result}</p>
    </div>
  );
}
