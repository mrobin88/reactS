import React from 'react';
import GuessRow from '../GuessRow/GuessRow';
import styles from './GameBoard.module.css'

const GameBoard = (props) => (
  <div className={styles.board}>
    {props.guesses.map((guess, idx) =>
      <GuessRow
        guess={guess}
        colors={props.colors}
        rowIdx={idx}
        currentGuess={idx === (props.guesses.length - 1)}
        key={idx}
      />
    )}
  </div>
);

export default GameBoard;
