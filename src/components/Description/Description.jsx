import "/src/assets/css/descripcion/descripcion.css";

const Description = ({ valor, setValor }) => {
  return (
    <div className='desc'>
      <textarea
        name='desc'
        id='desc'
        className='desc__desc'
        placeholder='Descripción'
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      ></textarea>
    </div>
  );
};

export default Description;
