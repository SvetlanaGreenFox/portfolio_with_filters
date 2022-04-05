import React from 'react';

function ProjectList(props) {
  const { list } = props;

  return (
    <ul>
      {list.map((project) => (
        <img className="card" src={project.img} alt="" />
      ))}
    </ul>
  );
}

export default ProjectList;
