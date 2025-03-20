import { useState } from 'react';

import Task from './components/Task';
import NewTaskForm from './components/NewTaskForm';
import Search from './components/Search';
import Filter from './components/Filter';

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
      title: 'Ir para a academia',
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

  const [search, setSearch] = useState('');

  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('asc');

  const addTask = (title, category) => {
    const trimmedTitle = title.trim();
    if (!trimmedTitle) return;

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

  const completeTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className='to-do-list'>
        {tasks
          .filter((task) =>
            filter === 'all'
              ? true
              : filter === 'completed'
              ? task.isCompleted
              : !task.isCompleted
          )
          .filter((task) =>
            task.title.toLowerCase().includes(search.toLowerCase())
          )
          .sort((task1, task2) =>
            sort === 'asc'
              ? task1.title.localeCompare(task2.title)
              : task2.title.localeCompare(task1.title)
          )
          .map((task) => (
            <Task
              key={task.id}
              task={task}
              removeTask={removeTask}
              completeTask={completeTask}
            />
          ))}
      </div>
      <NewTaskForm addTask={addTask} />
    </div>
  );
}

export default App;
