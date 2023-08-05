import React from 'react';
import ImageCard from './ImageCard';

const MainComponent = () => {
  const characterData = {
    character1: {
      imageUrl: 'https://cdn.myanimelist.net/images/characters/6/288151.jpg',
      name: 'Rei',
      description: 'This is the description for Character 1.',
    },
    character2: {
      imageUrl: 'https://cdn.myanimelist.net/images/characters/3/304983.jpg',
      name: 'Shinji',
      description: 'This is the description for Character 2.',
    },
    character3: {
      imageUrl: 'https://cdn.myanimelist.net/images/characters/15/447601.jpg',
      name: 'Misato',
      description: 'This is the description for Character 3.',
    },
    character4: {
        imageUrl: 'https://cdn.myanimelist.net/images/characters/12/92452.jpg',
        name: 'Asuka',
        description: 'This is the description for Character 3.',
    },
    character5: {
        imageUrl: 'https://cdn.myanimelist.net/images/characters/13/145217.jpg',
        name: 'Kensuke',
        description: 'This is the description for Character 3.',
    },
    character6: {
        imageUrl: 'https://cdn.myanimelist.net/images/characters/6/346978.jpg',
        name: 'Ritsuko',
        description: 'This is the description for Character 3.',
    },
    character7: {
        imageUrl: 'https://cdn.myanimelist.net/images/characters/10/145223.jpg',
        name: 'Kouzou',
        description: 'This is the description for Character 3.',
    },
    character8: {
        imageUrl: 'https://cdn.myanimelist.net/images/characters/11/53131.jpg',
        name: 'Gendou',
        description: 'This is the description for Character 3.',
    },
    character9: {
        imageUrl: 'https://cdn.myanimelist.net/images/characters/15/60206.jpg',
        name: 'Ryouji',
        description: 'This is the description for Character 3.',
    },
    character10: {
        imageUrl: 'https://cdn.myanimelist.net/images/characters/10/71728.jpg',
        name: 'Kaworu',
        description: 'This is the description for Character 3.',
    },
    character11: {
        imageUrl: 'https://cdn.myanimelist.net/images/characters/7/346982.jpg',
        name: 'Pen Pen',
        description: 'This is the description for Character 3.',
    },
    character12: {
        imageUrl: 'https://cdn.myanimelist.net/images/characters/15/145219.jpg',
        name: 'Shigeru',
        description: 'This is the description for Character 3.',
    },
    // Add more character data objects here as needed
  };

  const characterCards = Object.entries(characterData).map(([key, data]) => (
    <ImageCard
      key={key}
      imageUrl={data.imageUrl}
      title={data.name}
      description={data.description}
    />
  ));

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  // Shuffle the characterCards array
  shuffleArray(characterCards);

  return <div className="main-container">{characterCards}</div>;
};

export default MainComponent;
