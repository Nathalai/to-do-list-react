import { useState } from 'react';

const NewTaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !category) {
      return;
    }

    addTask(title, category);

    setTitle('');
    setCategory('');
  };

  return (
    <div className='new-task-form'>
      <h2>Criar Tarefa:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Digite o título'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value=''>Selecione uma categoria</option>
          <option value='Trabalho'>Trabalho</option>
          <option value='Pessoal'>Pessoal</option>
          <option value='Estudos'>Estudos</option>
        </select>
        <button type='submit'>Criar</button>
      </form>
    </div>
  );
};

export default NewTaskForm;
