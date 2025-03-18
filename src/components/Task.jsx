import React from 'react';

const Task = ({ task, removeTask, completeTask }) => {
  return (
    <div className={`task ${task.isCompleted ? 'completed' : ''}`}>
      <div className='content'>
        <p>{task.title}</p>
        <p>({task.category})</p>
      </div>
      <div>
        <button
          className={`complete ${task.isCompleted ? 'hidden' : ''}`}
          onClick={() => completeTask(task.id)}
        >
          Completar
        </button>
        <button
          className={`reverse ${task.isCompleted ? '' : 'hidden'}`}
          onClick={() => completeTask(task.id)}
        >
          Reverter
        </button>
        <button className='remove' onClick={() => removeTask(task.id)}>
          x
        </button>
      </div>
    </div>
  );
};

export default Task;
