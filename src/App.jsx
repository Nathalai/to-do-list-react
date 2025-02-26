import { useState } from 'react';

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
        ))}
      </div>
    </div>
  );
}

export default App;
