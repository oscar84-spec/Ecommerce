import "/src/assets/css/categoria/categoria.css";

const Categorias = ({ valor, setValor, lista }) => {
  return (
    <div className='categoria'>
      <label htmlFor='categoria' className='categoria__label'>
        Categoría
      </label>
      <select
        name='categoria'
        id='categoria'
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        className='categoria__select'
      >
        <option value='' disabled defaultValue='' hidden>
          Seleccione una Categoría
        </option>
        {lista.map((categoria, index) => (
          <option key={index} value={categoria}>
            {categoria}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Categorias;
