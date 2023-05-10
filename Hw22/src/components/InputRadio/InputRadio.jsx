

const InputRadio = ({ name, value, handleFunc, text }) => {

  return (
    <label>
      <input type="radio" name={name} value={value} onChange={handleFunc} />
      {text}
    </label>
  )
}

export default InputRadio