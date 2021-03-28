import React, { useState } from "react";
import NumberSubmitForm from "./numberSubmitForm.js";

function App() {
  const [guesses, setGuesses] = useState({
    pendingGuess: "",
    latestGuess: "",
    pastGuesses: [],
    feedback: ""
  });
  const duplicateGuessFeedback = (event) => {
    event.preventDefault()
    setGuesses({
      ...guesses,
      feedback:"Please guess a new value"
    })
  }
  const handlePendingGuessChange = (newGuess) => {
    setGuesses((guesses) => ({
      ...guesses,
      pendingGuess: newGuess,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setGuesses((guesses) => ({
      pendingGuess: "",
      latestGuess: guesses.pendingGuess,
      pastGuesses: guesses.pastGuesses.concat([guesses.pendingGuess]),
    }));
  };
  return (
    <div className="App">
      <NumberSubmitForm
        onChange={handlePendingGuessChange}
        onSubmit={handleSubmit}
        pendingGuess={guesses.pendingGuess}
        duplicateGuessFeedback={duplicateGuessFeedback}
        pastGuesses={guesses.pastGuesses}
      />
    </div>
  );
}

export default App;
