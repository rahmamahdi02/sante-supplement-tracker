import React from 'react';

const BlobAnimation = () => {
  return (
    <div
      style={{
        width: '300px',
        height: '200px',
        background: 'linear-gradient(to right, #6FB628, #FF914D, EF601E)',
        borderRadius: '50%',
        position: 'relative',
        animation: 'blobAnimation 4s infinite'
      }}
    ></div>
  );
};

export default BlobAnimation;

