import "/src/assets/css/input/input.css";

const Input = ({ label, nameLabel, tipo, valor, setValor }) => {
  return (
    <div className='input'>
      <label htmlFor={nameLabel} className='input__label'>
        {label}
      </label>
      <input
        type={tipo}
        className='input__input'
        name='url'
        id={nameLabel}
        required
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />
    </div>
  );
};

export default Input;
