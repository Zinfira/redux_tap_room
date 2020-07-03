import React from 'react';

function Header() {
  const styledHeader = {
    display: 'flex',
    backgroundColor: '#FFDCCC',
    color: '#5D2A42',
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
