import React from "react";

const NumberSubmitForm = (props) => {
  const handleChange = (event) => {
    props.onChange(event.target.value);
  };
  const handleSubmit = (event) => {
    if(!props.pastGuesses.includes(props.pendingGuess)) {
      props.onSubmit(event)
    }
    else props.duplicateGuessFeedback(event)
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Guess a Number</label>
        <input
          type="number"
          name="guess"
          value={props.pendingGuess}
          onChange={handleChange}
          min="1"
          max="100"
          required
        />
      </div>
      <button type="submit">Guess!</button>
    </form>
  );
};

export default NumberSubmitForm;
