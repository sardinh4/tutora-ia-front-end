'use client'

import React, { useState } from 'react';
import './contactList.css'

const ListItens = ({ listItem1, listItem2 }) => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <ul>
      <li className='listIten1' onClick={handleClick}>{listItem1}</li>
      {visible && <li>{listItem2}</li>}
    </ul>
  );
};

export default ListItens;