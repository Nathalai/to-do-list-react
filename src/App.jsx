import { useState } from 'react';

import Task from './components/Task';
import NewTaskForm from './components/NewTaskForm';

import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Criar funcionalidade X no sistema',
      category: 'Trabalho',
      isCompleted: false,
    },
    {
      id: 2,
      title: ' Ir para a academia',
      category: 'Pessoal',
      isCompleted: false,
    },
    {
      id: 3,
      title: 'Estudar React',
      category: 'Estudos',
      isCompleted: false,
    },
  ]);

  const addTask = (title, category) => {
    const updatedTasks = [
      ...tasks,
      {
        id: Math.floor(Math.random() * 10000),
        title,
        category,
        isCompleted: false,
      },
    ];
    setTasks(updatedTasks);
  };

  const removeTask = (id) => {
    const allTasks = [...tasks];
    const filteredTasks = allTasks.filter((task) =>
      task.id !== id ? task : null
    );
    setTasks(filteredTasks);
  };

  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>
      <div className='to-do-list'>
        {tasks.map((task) => (
          <Task key={task.id} task={task} removeTask={removeTask} />
        ))}
      </div>
      <NewTaskForm addTask={addTask} />
    </div>
  );
}

export default App;
