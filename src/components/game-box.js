import React from 'react';

export default function GameBox(){
  return (
    <div>
      <h1>HOT or COLD</h1>
      <div className='box'>
        <div className='topBar'>
          <h2>Make your Guess!</h2>
        </div>
        <div className='middle'>
          <div className='formGroup'>
            <label htmlFor='{props.id}'>Guess</label>
            <input type='text' name='userGuess' id='userGuess' />Enter your Guess
            <button>Guess</button>
          </div>
          <p>Guess #<span id='count'>0</span>!</p>
          <ul className='guessList' id='guessList'>
            <li>10</li>
          </ul>
        </div>
      </div>
    </div>
  )
}