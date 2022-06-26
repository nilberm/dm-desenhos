import React from "react";

const Forms = (props) => {
  return (
    <div id="formCard">
      <h2 id="price">R${props.price}</h2>
      <p className="descriptionItem">
        Desenho Realista, bla bla bla bla bla bla bla bla bla bla bla bla bla
        bla bla bla bla
      </p>
      <form>
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
            <button id="decreaseAmount" className="btn-Shop">
              -
            </button>
            <p id="amountValue">01</p>
            <button id="increaseAmount" className="btn-Shop">
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
            <button id="decreaseAmountPet" className="btn-Shop">
              -
            </button>
            <p id="amountPetValue">00</p>
            <button id="increaseAmountPet" className="btn-Shop">
              +
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Forms;
