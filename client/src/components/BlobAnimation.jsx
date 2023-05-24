import React from 'react';

const BlobAnimation = () => {
  return (
    <div
      style={{
        width: '440px',
        height: '440px',
        borderRadius: '10rem',
        background:
          'radial-gradient(63.44% 82.03% at 55.58% -15.63%, #e6b35a 0%, rgba(90, 221, 230, 0.26) 53.72%, rgba(90, 221, 230, 0) 100%), linear-gradient(26.62deg, rgba(113, 89, 249, 0.8) 20.64%, rgba(249, 124, 89, 0) 49.82%), linear-gradient(56.79deg, #39813c 33.79%, rgba(185, 91, 230, 0) 72.67%), linear-gradient(301.08deg, rgba(252, 178, 91, 0.91) 20.42%, rgba(252, 178, 91, 0) 60.38%), linear-gradient(141.57deg, rgba(81, 167, 54, 0.85) 19.08%, rgba(78, 173, 235, 0) 98.72%, #D3E4FF)',
        backgroundBlendMode: 'normal, normal, darken, normal, normal, normal',
        filter: 'blur(51px)',
        animation: 'fade 3s infinite alternate',
      }}
    ></div>
  );
};

export default BlobAnimation;

