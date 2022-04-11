import { useEffect, useState } from "react";
import Dice from "./Dice";
import Confetti from 'react-confetti'
function App() {
  const allNewDice = () => {
    const dice = [];
    for (let i = 0; i < 10; i++) {
      dice.push({
        value: Math.floor(Math.random() * 7),
        state: false,
        id: i,
      });
    }
    return dice;
  };
  const [dices, setDices] = useState(allNewDice());

  const [tenez, setTenez] = useState([]);
const reset = ()=>setDices(allNewDice())
  useEffect(() => {
    setTenez(() => dices.filter((item) => item.state === true));
  }, [dices]);

  const change = (id) => {
    setDices((old) =>
      old.map((item) => {
        return item.id === id ? { ...item, state: !item.state } : { ...item };
      })
    );
  };
  const diceShow = dices.map((item) => {
    return (
      <Dice
        key={item.id}
        value={item.value}
        id={item.id}
        change={change}
        state={item.state}
      />
    );
  });

  const roll = () => {
    setDices((old) =>
      old.map((item) => {
        return item.state
          ? { ...item, value: item.value }
          : { ...item, value: Math.floor(Math.random() * 7) };
      })
    );
  };

  return (
    <main className="main">
        {tenez.length===10 &&<Confetti/>}
      <section  className="container">
     <h1>Tenezis</h1>
        {tenez.length !==10 ? <p>
            Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p> : <p>you Won !!!</p> }

        <div className={tenez.length!==10 ? "numberContainer" : 'congrat'}> {tenez.length!==10 ? diceShow : 'CONGRATIOLATION'}</div>

        <button className="btn" onClick={tenez.length !==10 ? roll : reset }>
          {tenez.length !== 10 ? "Roll" : "Reset"}
        </button>
      </section>
    </main>
  );
  
}

export default App;
