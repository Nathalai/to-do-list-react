import React from 'react';

const Task = ({ task, removeTask }) => {
  return (
    <div className='task'>
      <div className='content'>
        <p>{task.title}</p>
        <p>({task.category})</p>
      </div>
      <div>
        <button className='complete'>Completar</button>
        <button className='remove' onClick={() => removeTask(task.id)}>
          x
        </button>
      </div>
    </div>
  );
};

export default Task;
