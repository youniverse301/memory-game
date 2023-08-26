import React, { useState, useEffect } from 'react';
import { characterList } from './data';


function shuffleUnselected(array) {
  const unselectedItems = characterList.filter(item => !item.beenSelected);
  const shuffledUnselected = unselectedItems
    .map(item => ({ ...item })) // Create new objects to prevent mutation
    .sort(() => Math.random() - 0.5);

  return shuffledUnselected;
}  

const sorted = shuffleUnselected(characterList)

export function MainGame() {
  let [stage, setStage] = useState(1);
  let [character, setCharacter] = useState(shuffleUnselected(characterList)); // Initialize with shuffled array
  let [stage1Characters, setStage1Characters] = useState([character[0], character[1],
    character[2], character[3]]);
  let [stage2Characters, setStage2Characters] = useState([character[4], character[5],
    character[6], character[7], character[8], character[9]]);
  let [stage3Characters, setStage3Characters] = useState([character[10], character[11],
    character[12], character[13], character[14], character[15],
    character[16], character[17]]);
  let [clickedCharacters, setClickedCharacters] = useState([]);
  let [currentStageCharacters ,setCurrentStageCharacters] = useState(stage1Characters);
  let [currentScore, setCurrentScore] = useState(0);
  let [bestScore, setBestScore] = useState(0);


  const unsorted = characterList;
  const gameOver = document.getElementById('gameOver');


  const handleClick = (event) => {
    const id = event.target.parentNode.id;
    const clickedCharacter = unsorted[id];
  
    if (clickedCharacter.beenClicked === false) {
      // Update the clicked characters state
      setClickedCharacters((prevClicked) => [...prevClicked, clickedCharacter]);
      clickedCharacter.beenClicked = true;
      setCurrentScore((prevScore) => prevScore + 1);
      checkBestScore();
      shuffleElements();
    } else {
      console.log('Already clicked');
      gameOver.classList.remove('hidden');
    }
  };

  function checkBestScore() {
    if (bestScore <= currentScore) {
      setBestScore((prevBest) => prevBest + 1)
    }
  }

  useEffect(() => {
    if (stage === 1 && clickedCharacters.length === 4) {
      setStage(stage + 1);
      setClickedCharacters([]);
      setCurrentStageCharacters(stage2Characters);
      shuffleElements();
    } else if (stage === 2 && clickedCharacters.length === 6) {
      setStage(stage + 1);
      setClickedCharacters([]);
      setCurrentStageCharacters(stage3Characters);
      shuffleElements();
    } else if (stage === 3 && clickedCharacters.length === 8) {
      setStage(stage + 1);
      console.log('You Win!');
    }
  }, [stage, clickedCharacters]);
  

  const shuffleElements = () => {
    const shuffled = [...currentStageCharacters];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    // Update the correct state array based on the current stage
    if (stage === 1) {
      setStage1Characters(shuffled);
    } else if (stage === 2) {
      setStage2Characters(shuffled);
    } else if (stage === 3) {
      setStage3Characters(shuffled);
    }
  };

  useEffect(() => {
    console.log(clickedCharacters)
  }, [clickedCharacters])

  function resetGame() {
    setCurrentScore(0);
    setStage(1);
    gameOver.classList.add('hidden');
  
    // Shuffle the characters
    const shuffledCharacters = shuffleUnselected(characterList);
  
    // Set the new shuffled characters for the current stage

    setStage1Characters([shuffledCharacters[0], shuffledCharacters[1],
      shuffledCharacters[2], shuffledCharacters[3]]);
    setStage2Characters([shuffledCharacters[4], shuffledCharacters[5],
      shuffledCharacters[6], shuffledCharacters[7], shuffledCharacters[8], shuffledCharacters[9]]);
    setStage3Characters([shuffledCharacters[10], shuffledCharacters[11],
      shuffledCharacters[12], shuffledCharacters[13], shuffledCharacters[14], shuffledCharacters[15],
      shuffledCharacters[16], shuffledCharacters[17]]);
    setCurrentStageCharacters([
      shuffledCharacters[0], shuffledCharacters[1], shuffledCharacters[2],
      shuffledCharacters[3]]);
  
    // Reset the beenClicked property for all characters
    for (let i = 0; i < unsorted.length; i++) {
      unsorted[i].beenClicked = false;
    }
    console.log(unsorted)
    setClickedCharacters([]);
  }
  
  let stage1 = (
    <div id='cards'>
      <div className='card' id={stage1Characters[0].id} onClick={handleClick}>
        <img src={stage1Characters[0].imageUrl} alt={stage1Characters[0].name} />
        <h3>{stage1Characters[0].name}</h3>
      </div>
      <div className='card' id={stage1Characters[1].id} onClick={handleClick}>
        <img src={stage1Characters[1].imageUrl} alt={stage1Characters[1].name} />
        <h3>{stage1Characters[1].name}</h3>
      </div>
      <div className='card' id={stage1Characters[2].id} onClick={handleClick}>
        <img src={stage1Characters[2].imageUrl} alt={stage1Characters[2].name} />
        <h3>{stage1Characters[2].name}</h3>
      </div>
      <div className='card' id={stage1Characters[3].id} onClick={handleClick}>
        <img src={stage1Characters[3].imageUrl} alt={stage1Characters[3].name} />
        <h3>{stage1Characters[3].name}</h3>
      </div>
    </div>
  );
  let stage2 = (
    <div id='cards'>
      <div className='card' id={stage2Characters[0].id} onClick={handleClick}>
        <img src={stage2Characters[0].imageUrl} alt={stage2Characters[0].name} />
        <h3>{stage2Characters[0].name}</h3>
      </div>
      <div className='card' id={stage2Characters[1].id} onClick={handleClick}>
        <img src={stage2Characters[1].imageUrl} alt={stage2Characters[1].name} />
        <h3>{stage2Characters[1].name}</h3>
      </div>
      <div className='card' id={stage2Characters[2].id} onClick={handleClick}>
        <img src={stage2Characters[2].imageUrl} alt={stage2Characters[2].name} />
        <h3>{stage2Characters[2].name}</h3>
      </div>
      <div className='card' id={stage2Characters[3].id} onClick={handleClick}>
        <img src={stage2Characters[3].imageUrl} alt={stage2Characters[3].name} />
        <h3>{stage2Characters[3].name}</h3>
      </div>
      <div className='card' id={stage2Characters[4].id} onClick={handleClick}>
        <img src={stage2Characters[4].imageUrl} alt={stage2Characters[4].name} />
        <h3>{stage2Characters[4].name}</h3>
      </div>
      <div className='card' id={stage2Characters[5].id} onClick={handleClick}>
        <img src={stage2Characters[5].imageUrl} alt={stage2Characters[5].name} />
        <h3>{stage2Characters[5].name}</h3>
      </div>
    </div>
  );
  let stage3 = (
    <div id='cards'>
      <div className='card' id={stage3Characters[0].id} onClick={handleClick}>
        <img src={stage3Characters[0].imageUrl} alt={stage3Characters[0].name} />
        <h3>{stage3Characters[0].name}</h3>
      </div>
      <div className='card' id={stage3Characters[1].id} onClick={handleClick}>
        <img src={stage3Characters[1].imageUrl} alt={stage3Characters[1].name} />
        <h3>{stage3Characters[1].name}</h3>
      </div>
      <div className='card' id={stage3Characters[2].id} onClick={handleClick}>
        <img src={stage3Characters[2].imageUrl} alt={stage3Characters[2].name} />
        <h3>{stage3Characters[2].name}</h3>
      </div>
      <div className='card' id={stage3Characters[3].id} onClick={handleClick}>
        <img src={stage3Characters[3].imageUrl} alt={stage3Characters[3].name} />
        <h3>{stage3Characters[3].name}</h3>
      </div>
      <div className='card' id={stage3Characters[4].id} onClick={handleClick}>
        <img src={stage3Characters[4].imageUrl} alt={stage3Characters[4].name} />
        <h3>{stage3Characters[4].name}</h3>
      </div>
      <div className='card' id={stage3Characters[5].id} onClick={handleClick}>
        <img src={stage3Characters[5].imageUrl} alt={stage3Characters[5].name} />
        <h3>{stage3Characters[5].name}</h3>
      </div>
      <div className='card' id={stage3Characters[6].id} onClick={handleClick}>
        <img src={stage3Characters[6].imageUrl} alt={stage3Characters[6].name} />
        <h3>{stage3Characters[6].name}</h3>
      </div>
      <div className='card' id={stage3Characters[7].id} onClick={handleClick}>
        <img src={stage3Characters[7].imageUrl} alt={stage3Characters[7].name} />
        <h3>{stage3Characters[7].name}</h3>
      </div>
    </div>
  );
  

  function stageResponse(stage) {
    if (stage === 1) {
      return stage1
    } else if (stage === 2) {
        return stage2
    } else if (stage === 3) {
        return stage3
    }
  }

  return (
    <div id='boardContainer'>
      <div id='gameOver' className='hidden'>
        <p>You lost! Better luck next time.</p>
        <button onClick={resetGame}>Play Again</button>
      </div>
      <div id='currentScore'>
        <p>Current score: {currentScore}</p>
      </div>
      <div id='bestScore'>
        <p>Best score: {bestScore}</p>
      </div>
      {stageResponse(stage)}
    </div>
  );
}