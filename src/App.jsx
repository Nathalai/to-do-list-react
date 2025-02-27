import { useState } from 'react';

import Task from './components/Task';

import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Criar funcionalidade X no sistema',
      category: 'Trabalho',
      isCompleted: false,
    },
    {
      id: 2,
      text: ' Ir para a academia',
      category: 'Pessoal',
      isCompleted: false,
    },
    {
      id: 3,
      text: 'Estudar React',
      category: 'Estudos',
      isCompleted: false,
    },
], )

  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>
      <div className="to-do-list">
        {tasks.map((task) => (
          <Task task={task} />
        ))}
      </div>
    </div>
  );
}

export default App;
