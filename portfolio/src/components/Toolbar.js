import React from 'react';

function Toolbar(props) {
  console.log(props);
  const { filters, selected, onSelectFilter } = props;

  const onSelected = () => {
    onSelectFilter(filter);
  };

  return (
    <ul>
      {filters.map((filter) => (
        <button onClick={onSelected}>{filter}</button>
      ))}
    </ul>
  );
}

export default Toolbar;
