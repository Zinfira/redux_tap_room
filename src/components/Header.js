import React from 'react';

function Header() {
  const styledHeader = {
    display: 'flex',
    backgroundColor: '#F8F4E3',
    color: '#9A998C',
    fontFamily: 'Comic Sans MS, Comic Sans, cursive',
    justifyContent: 'center',
    fontSize:'1.5rem'
  }
  return (
    <div style={styledHeader}>
      <h1>Tap Room</h1>
    </div>
  );
}

export default Header;
