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
  const [stage, setStage] = useState(1);
  const [character, setCharacter] = useState(sorted); // Initialize with shuffled array
  const [stage1Characters, setStage1Characters] = useState([character[0], character[1],
    character[2], character[3]]);
  const [stage2Characters, setStage2Characters] = useState([character[4], character[5],
    character[6], character[7], character[8], character[9]]);
  const [stage3Characters, setStage3Characters] = useState([character[10], character[11],
    character[12], character[13], character[14], character[15],
    character[16], character[17]]);
  const [clickedCharacters, setClickedCharacters] = useState([]);
  const [currentStageCharacters ,setCurrentStageCharacters] = useState(stage1Characters);

  console.log(currentStageCharacters)

  const current = currentIndex;
  currentIndex += 1;
  console.log(character)
  const unsorted = characterList;


  const handleClick = (event) => {
    const id = event.target.parentNode.id;
    console.log(event.target.parentNode)
    const clickedCharacter = unsorted[id];
    console.log(clickedCharacter)
  
    if (clickedCharacter.beenClicked === false) {
      // Update the clicked characters state
      setClickedCharacters((prevClicked) => [...prevClicked, clickedCharacter]);
      // Update the character's state directly
      setCharacter((prevChars) =>
        prevChars.map((char) =>
          char.id === clickedCharacter.id ? { ...char, beenClicked: true } : char
        )
      );
      shuffleElements();
    } else {
      console.log('Already clicked');
    }
  };

  useEffect(() => {
    // Logic to handle advancing stages and shuffling
    if (stage === 1 && clickedCharacters.length === 4) {
      setStage(stage + 1);
      setClickedCharacters([]);
      setCurrentStageCharacters(stage2Characters);
      console.log('next stage');
      shuffleElements();
    } else if (stage === 2 && clickedCharacters.length === 6) {
      setStage(stage + 1);
      setCurrentStageCharacters(stage3Characters);
      setClickedCharacters([]);
      console.log('next stage');
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
    stageResponse(stage)
  );
}
