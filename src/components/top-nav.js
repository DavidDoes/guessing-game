import React from 'react';

import './top-nav.css'

export default function TopNav(props){
  return (
    <nav>
      <ul className='clearfix'>
        <li>
          <a
            href='#what'
            className='what'
            aria-label='How to play'
          >
            What?
          </a>
        </li>
        <li>
          <a
            href='#feedback'
            className='new'
            aria-label='Start a new game'
            onClick={() => props.onRestart()}
          >
            + New Game
          </a>
        </li>
        <li>
          <a
            href='#get-status'
            // 'visuallyhidden' hides element while leaving it
            // available to screen reader users
            className='visuallyhidden focusable status-link'
            onClick={() => props.onGenerateAuralUpdate()}
          >
            Hear state of game
          </a>
        </li>
      </ul>
    </nav>
  )
}