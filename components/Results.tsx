import React from 'react';
import Thumbnail from './Thumbnail';

interface Props {
  results: any[];
}

const Results: React.FC<Props> = ({ results }) => {
  return (
    <div>
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  );
};

export default Results;
