import React from 'react';

import './feedback.css';

export default function Feedback(props){
  // guessCount generate key so React treats feedback
  // message as DOM change, even when guess doesn't change feedback text.
  // necessary for consistent aural feedback via aria-live

  const key = props.guessCount;

  let guessAgain;
  if(key !== 0){
    guessAgain = <span className='visuallyhidden'>Guess again!</span>
  }

  return (
    <h2 
      key={key}
      id='feedback'
      role='aural-status'
      aria-live='assertive'
      aria-atomic='true' //each time aria-live region is updated, entirety of content is shown instead of just the diff between current and last
    >
      {props.feedback} {guessAgain}
    </h2>
  );
}