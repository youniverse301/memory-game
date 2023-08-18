import React, { useState, useEffect } from 'react';
import { characterList } from './data';

function shuffleUnselected(characterList) {
  const unselectedItems = characterList.filter(item => !item.beenSelected);
  const shuffledUnselected = unselectedItems
    .map(item => ({ ...item })) // Create new objects to prevent mutation
    .sort(() => Math.random() - 0.5);

  return shuffledUnselected;
}  

const sorted = shuffleUnselected(characterList)
let currentIndex = 0;

export default function ImageCard() {
  const [index, setIndex] = useState(0);
  const [character, setCharacter] = useState(sorted); // Initialize with shuffled array

  const current = currentIndex;
  currentIndex += 1;

  return (
    <div id='image-card' >
      <img src={character[current].imageUrl} alt={character[current].name} />
      <h3>{character[current].name}</h3>
    </div>
  );
}
