import React from 'react';

import './info-section.css';

export default function InfoSection(props){
  return(
    <section id='what' tabIndex='-1'>
      <h2>How do I play?</h2>
      <ol>
        <li>A random number between 1 and 100 is generated.</li>
        <li>You need to guess it until you guess the right one.</li>
        <li>You're close if you see 'Hot' and not if you see 'Cold'.</li>
      </ol>
      <p>If you're using a screen reader, use the visually hidden 'Hear state of game' link in the navigation region to receive a reminder of all past guess and how close you are to guessing correctly.</p>
    </section>
  );
}