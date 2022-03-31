import React, { useState } from 'react';
import photo from './photo.js';
import ProjectList from './ProjectList.js';
import Toolbar from './Toolbar.js';

function Portfolio() {
  const projects = photo;
  const filters = ['All', 'Websites', 'Flayers', 'Business Cards'];
  const [state, setState] = useState('');

  const filtered = (projects, state) => {
    if (state === 'All') {
      return projects;
    }
    return projects.filter((p) => p.category === state);
  };
  console.log(state);
  const filteredProjects = filtered(projects, state);

  return (
    <div>
      {/* <Toolbar filters={filters} selected={state} onSelectFilter={onSelect} /> */}

      <ul>
        {filters.map((filter) => (
          <button onClick={() => console.log(filter)}>{filter}</button>
        ))}
      </ul>
      <ProjectList list={filteredProjects} />
    </div>
  );
}

export default Portfolio;
