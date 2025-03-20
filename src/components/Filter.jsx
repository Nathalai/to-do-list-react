const Filter = ({ filter, setFilter, setSort }) => {
  return (
    <div className='filter'>
      <h2>Filtrar</h2>
      <div className='filter-options'>
        <div>
          <p>Status:</p>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value='all'>Todas</option>
            <option value='completed'>Completas</option>
            <option value='incomplete'>Incompletas</option>
          </select>
        </div>
        <div>
          <p>Ordenar Alfabeticamente:</p>
          <button onClick={() => setSort('asc')}>Ascendente</button>
          <button onClick={() => setSort('desc')} className='desc-alpha-btn'>
            Descendente
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
