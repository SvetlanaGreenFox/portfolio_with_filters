import React from 'react';

function Toolbar(props) {

  const { filters, selected, onSelectFilter } = props;

  return (
    <ul>
      {filters.map((filter) => (
        <button
          className={filter === selected ? 'button select-button' : 'button'}
          onClick={() => onSelectFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </ul>
  );
}

export default Toolbar;
