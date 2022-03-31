import React, { useState } from 'react';

function ProjectList(props) {
  const { list } = props;
  console.log(props);
  return (
    <ul>
      {list.map((project) => (
        <img className="card" src={project.img} />
      ))}
    </ul>
  );
}

export default ProjectList;
