import React, { useState, useEffect } from "react";
import NumberSubmitForm from "./numberSubmitForm.js";

function App() {
  const [guesses, setGuesses] = useState({
    pendingGuess: "",
    latestGuess: "",
    pastGuesses: [],
    feedback: "",
    target: Math.floor(Math.random() * 100) + 1
  });
  useEffect(() => {
    const validateGuess = () => {
      let message = guesses.target == guesses.latestGuess ? "Correct!" :
        guesses.latestGuess < 10 + guesses.target && guesses.latestGuess > guesses.target - 10 ? "Hot" :
        guesses.latestGuess ? "Cold" : 
        "Guess a number"
      setGuesses({
        ...guesses,
        feedback: message
      }) 
    }
    validateGuess()
  }, [guesses.latestGuess])
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
      ...guesses,
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
