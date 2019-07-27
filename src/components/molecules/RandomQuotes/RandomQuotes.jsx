import React from 'react';
import Typography from '../../atoms/Typography';
import quotes from '../../../assets/lists/quotes';

const getRandomQuotes = () => {
  const shortQuotes = quotes.filter(quote => quote[1].length < 100);
  const length = shortQuotes.length;

  return [null, null, null].map(_ => {
    return shortQuotes[Math.floor(Math.random() * length)];
  });
};

const RandomQuotes = () => {
  const [quotes, _] = React.useState(getRandomQuotes());
  return quotes.map(quote => {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          margin: '22px 0',
          padding: '15px 0',
          boxShadow: 'rgba(0, 0, 0, 0.32) 0px 0px 3px 0px',
          background: '#fbfbfb',
          borderRadius: 5
        }}
      >
        <Typography variant={'p'} children={quote[1]} />
        <div
          style={{
            width: 1,
            height: 50
          }}
        />
        <Typography variant={'h5'} children={'- ' + quote[0]} />
      </div>
    );
  });
};

export default RandomQuotes;