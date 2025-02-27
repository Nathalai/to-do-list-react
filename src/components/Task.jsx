import React from 'react';

const Task = ({ task }) => {
    return (
        <div className="task">
            <div className="content">
              <p>{ task.text }</p>
              <p>({ task.category })</p>
            </div>
            <div>
              <button>Completar</button>
              <button>x</button>
            </div>
        </div>
    )
}

export default Task