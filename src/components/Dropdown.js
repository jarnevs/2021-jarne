import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Dropdown = ({ title, items }) => {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState('');

  const handleChoice = (item) => {
    setSelection(item);
    setOpen(false);
  }

  return (
    <div className="dropdown">
      <div className="dropdown__title" onClick={() => setOpen(!open)}>
        <p>{title}</p>
        <FontAwesomeIcon icon={faChevronDown} color="#495864" size="xs" />
      </div>
      {open && (
        <ul className="dropdown__list">
          {items.map((item, index) => (
            <li key={index}>
              <button onClick={() => handleChoice(item)}>{item}</button>
            </li>
          ))}
        </ul>
      ) }
    </div>
  )
}

export default Dropdown;