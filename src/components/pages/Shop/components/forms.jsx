import React, { useState } from "react";

const Forms = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [amountPeople, setAmountPeople] = useState(1);
  const [amountPet, setAmountPet] = useState(0);

  const increPeople = () => {
    setAmountPeople(amountPeople + 1);
  };

  const decrePeople = () => {
    if (amountPeople > 1) {
      setAmountPeople(amountPeople - 1);
    } else {
      setAmountPeople(1);
    }
  };

  const increPet = () => {
    setAmountPet(amountPet + 1);
  };

  const decrePet = () => {
    if (amountPet > 0) {
      setAmountPet(amountPet - 1);
    } else {
      setAmountPet(0);
    }
  };

  return (
    <div id="formCard">
      <h2 id="price">R${props.price}</h2>
      <p className="descriptionItem">
        Desenho Realista, bla bla bla bla bla bla bla bla bla bla bla bla bla
        bla bla bla bla
      </p>
      <form onSubmit={handleSubmit}>
        <div id="sizeContainer">
          <label className="sizeValue">
            <span>Tamanho: </span>
            {props.size}
          </label>

          <div id="radioInput">
            <div className="radioItems">
              <input
                type="radio"
                name="size"
                value={props.value}
                id="busto"
                required
              />
              <label htmlFor="busto"> Busto </label>
            </div>

            <div className="radioItems">
              <input
                type="radio"
                name="size"
                value={props.value}
                id="meioCorpo"
              />
              <label htmlFor="meioCorpo"> Meio Corpo </label>
            </div>

            <div className="radioItems">
              <input
                type="radio"
                name="size"
                value={props.value}
                id="corpoInteiro"
              />
              <label htmlFor="corpoInteiro">Corpo Inteiro</label>
            </div>
          </div>
        </div>

        <div id="amount">
          <label className="sizeValue">
            <span>Quantidade:</span>
          </label>
          <br></br>
          <div className="btnContainer">
            <button
              id="decreaseAmount"
              className="btn-Shop"
              onClick={decrePeople}
            >
              -
            </button>
            <p id="amountValue">{amountPeople}</p>
            <button
              id="increaseAmount"
              className="btn-Shop"
              onClick={increPeople}
            >
              +
            </button>
          </div>
        </div>

        <div id="amountPet">
          <div id="petInfo">
            <p id="petText">Pets - R$40 cada</p>
            <p id="infoPrice">* Crianças e bebês são o mesmo valor de adulto</p>
          </div>
          <label className="sizeValue">
            <span>Quantidade:</span>
          </label>
          <br></br>
          <div className="btnContainer">
            <button
              id="decreaseAmountPet"
              className="btn-Shop"
              onClick={decrePet}
            >
              -
            </button>
            <p id="amountPetValue">{amountPet}</p>
            <button
              id="increaseAmountPet"
              className="btn-Shop"
              onClick={increPet}
            >
              +
            </button>
          </div>
        </div>
        <input type="submit" value="Finalizar Orçamento" />
      </form>
    </div>
  );
};

export default Forms;
