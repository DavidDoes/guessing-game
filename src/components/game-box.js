import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';

export default class GameBox extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      guesses: [],
      feedback: 'Make your Guess!',
      pluralized: '',
      correctAnswer: Math.floor(Math.random() * 100) + 1
    };
  }

  restart(){
    this.setState({
      guesses: [],
      feedback: 'Make your Guess!',
      pluralized: '',
      correctAnswer: Math.floor(Math.random() * 100) + 1
    });
  }

  makeGuess(guess){
    guess = parseInt(guess, 10);
    if(isNaN(guess)){
      this.setState({ feedback: 'Please enter a number' });
      return;
    }

    const difference = Math.abs(guess - this.state.correctAnswer);

    let feedback; 
    if(difference >= 50){
      feedback = 'Ice cold...';
    } else if (difference >= 30){
      feedback = 'Cold...';
    } else if (difference >= 10){
      feedback = 'Warm...';
    } else if (difference >= 1){
      feedback = 'Hot!';
    } else {
      feedback = 'Winner! Winner!'
    }

    this.setState({
      feedback,
      guesses: [...this.state.guesses, guess]
    });

    document.title = feedback ? `${feedback} | Hot or Cold` : 'Hot or Cold';
  }

  generateAuralUpdate(){
    const {guesses, feedback} = this.state;

    // if not 1 guess, pluralize nouns
    const pluralize = guesses.length !== 1;

    let auralStatus = `Status: ${feedback}. You've made ${guesses.length} ${pluralize ? 'guesses' : 'guess'}.`;

    if(guesses.length > 0){
      auralStatus += `${pluralize ? 'In order of most- to least-recent, they are': 'It was'}: ${guesses.reverse().join(', ')}`;
    }

    this.setState({ auralStatus })
  }

  render(){
    const {feedback, guesses, auralStatus} = this.state;
    const guessCount = guesses.length;

    return(
      <div>
        <Header 
          onRestart={() => this.restart()}
          ongenerateAuralUpdate={() => this.generateAuralUpdate()}
        />

        <main role='main'>
          <GuessSection
            feedback={feedback}
            guessCount={guessCount}
            onMakeGuess={guess => this.makeGuess(guess)}
          />
          <StatusSection 
            guesses={guesses}
            auralStatus={auralStatus}
          />
          <InfoSection />
        </main>
      </div>
    );
  }
}