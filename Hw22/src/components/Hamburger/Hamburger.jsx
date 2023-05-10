import { useReducer } from "react";
import { initialState, reducer } from "../../store";
import InputRadio from "../InputRadio/InputRadio";

const Hamburger = () => {
  const [state, dispatch] = useReducer(reducer, initialState)


  const handleSizeChange = (e) => {
    const size = e.target.value
    let price = 0
    let calories = 0

    if (size === 'small') {
      price = 50
      calories = 20
    } else if (size === 'big') {
      price = 100
      calories = 40
    }

    return dispatch({ type: 'SIZE', payload: { price, calories } })

  }

  const handleStuffingChange = (e) => {
    const stuffing = e.target.value
    let price = 0
    let calories = 0

    if (stuffing === 'cheese') {
      price = 10
      calories = 20
    } else if (stuffing === 'salad') {
      price = 20
      calories = 5
    } else if (stuffing === 'potato') {
      price = 15
      calories = 10
    }

    return dispatch({ type: 'STUFFING', payload: { price, calories } })
  }

  const handleAdditionChange = (e) => {
    const eddition = e.target.value
    let price = 0
    let calories = 0

    if (eddition === 'condiment') {
      price = 15
      calories = 0
    } else if (eddition === 'mayo') {
      price = 20
      calories = 5
    }

    return dispatch({ type: 'ADDITION', payload: { price, calories } })
  }

  const totals = () => {
    dispatch({ type: 'TOTALS' })
  }


  return (
    <div>
      <h2>Гамбургер</h2>

      <div>
        <InputRadio name={'size'} value={'small'} handleFunc={handleSizeChange} text={"Маленикий (50 тугриків, 20 калорій)"} />
        <InputRadio name={'size'} value={'big'} handleFunc={handleSizeChange} text={"Великий (100 тугриків, 40 калорій)"} />
      </div>

      <div>
        <InputRadio name={'stuffing'} value={'cheese'} handleFunc={handleStuffingChange} text={"Сир (+ 10 тугриків, + 20 калорій)"} />
        <InputRadio name={'stuffing'} value={'salad'} handleFunc={handleStuffingChange} text={"Салат (+ 20 тугриків, + 5 калорій)"} />
        <InputRadio name={'stuffing'} value={'potato'} handleFunc={handleStuffingChange} text={"Картопля (+ 15 тугриків, + 10 калорій)"} />
      </div>

      <div>
        <InputRadio name={'addition'} value={'condiment'} handleFunc={handleAdditionChange} text={"Посипати приправою (+ 15 тугриків, 0 калорій)"} />
        <InputRadio name={'addition'} value={'mayo'} handleFunc={handleAdditionChange} text={"Полити майонезом (+ 20 тугриків, + 5 калорій)"} />
      </div>

      <button onClick={totals}>Calculate</button>

      <div>
        <h3>Ціна: {state.totalPrice} тугриків</h3>
        <h3>Калорії: {state.totalCalories} калорій</h3>
      </div>

    </div>
  );
};

export default Hamburger