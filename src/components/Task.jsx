import React from 'react';

const Task = ({ task }) => {
  return (
    <div className='task'>
      <div className='content'>
        <p>{task.title}</p>
        <p>({task.category})</p>
      </div>
      <div>
        <button className='complete'>Completar</button>
        <button className='remove'>x</button>
      </div>
    </div>
  );
};

export default Task;
