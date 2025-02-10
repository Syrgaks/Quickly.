import React from 'react';

function Blog({ text, col, image }) {
  return (
    <div
      style={{
        width: '400px',
        padding: '20px',
        borderRadius: '20px',
        backgroundColor: '#e4e7f5',
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      }}
    >
      <img
        src={image}
        alt={text}
        style={{ width: '100px', height: '100px', borderRadius: '50%' }}
      />
      <div>
        <h1 style={{ fontSize: '18px', margin: '0 0 5px 0' }}>{text}</h1>
        <h2 style={{ fontSize: '16px', color: '#555', margin: 0 }}>{col}</h2>
      </div>
    </div>
  );
}

export default Blog;
