import React from 'react';
import Thumbnail from './Thumbnail';
// import FlipMove from 'react-flip-move';

interface Props {
  results: any[];
}

const Results: React.FC<Props> = ({ results }) => {
  return (
    // https://github.com/joshwcomeau/react-flip-move/issues/269
    // <FlipMove
    //   className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3
    //   3xl:flex flex-wrap justify-center'
    // >
    <div
      className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3
      3xl:flex flex-wrap justify-center'
    >
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  );
};

export default Results;
