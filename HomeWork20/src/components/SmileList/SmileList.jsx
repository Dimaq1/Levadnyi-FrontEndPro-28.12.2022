import React, { useState } from 'react';

const SmileList = () => {
  const [smile, setSmile] = useState([
    { id: 1, name: 'Smile', count: 0 },
    { id: 2, name: 'Sad', count: 0 },
    { id: 3, name: 'Angry', count: 0 },
    { id: 4, name: 'Сry', count: 0 },
    { id: 5, name: 'Thinking', count: 0 },
  ]);
  const [winner, setWinner] = useState(null);

  const handleClick = (id) => {
    const updatedSmileys = smile.map((smile) =>
      smile.id === id ? { ...smile, count: smile.count + 1 } : smile
    );
    setSmile(updatedSmileys);
  };

  const handleResults = () => {
    const sortedSmileys = [...smile].sort((a, b) => b.count - a.count);
    const winner = sortedSmileys[0];
    setWinner(winner);
  };

  return (
    <div>
      <ul>
        {smile.map((smiley) => (
          <li key={smiley.id}>
            {smiley.name}{' '}
            <button onClick={() => handleClick(smiley.id)}>Vote</button>{' '}
            <span>{smiley.count}</span>
          </li>
        ))}
      </ul>
      <button onClick={handleResults}>Show Results</button>
      {winner && (
        <div>Winner {winner.name}</div>
      )}
    </div>
  );
};

export default SmileList;






