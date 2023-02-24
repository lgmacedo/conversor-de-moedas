import { useState } from "react";

function App() {
  const [valor, setValor] = useState("");
  const [moeda, setMoeda] = useState("");

  const [resultadoAparecendo, setResultadoAparecendo] = useState(false);
  const [valorInserido, setValorInserido] = useState("");
  const [moedaConvertida, setMoedaConvertida] = useState("")
  const [valorConvertido, setValorConvertido] = useState("");

  const moedas = [
    { name: "Dólar Americano", code: "USD", price: 5.21 },
    { name: "Euro", code: "EUR", price: 5.49 },
    { name: "Libra Esterlina", code: "GBP", price: 6.22 },
    { name: "Peso Argentino", code: "ARS", price: 0.027 },
  ];

  function converter() {
    let newValor = Number(valor.replace(/,/g, "."));
    if (valor !== "" && newValor > 0 && moeda !== "") {
      const valorFinal = newValor / moedas[moeda].price;
      setResultadoAparecendo(true);
      setValorInserido(newValor);
      setMoedaConvertida(moedas[moeda].code);
      setValorConvertido(valorFinal.toFixed(2));
    }
  }

  return (
    <div className="App">
      <p>Conversor Monetário</p>
      <input
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        placeholder="Valor em real"
      ></input>
      <select
        name="currencies"
        id="currencies"
        onChange={(e) => setMoeda(e.target.value)}
      >
        <option value="">Selecione uma moeda:</option>
        {moedas.map((moeda, i) => (
          <option key={i} value={i}>
            {moeda.name}
          </option>
        ))}
      </select>
      <button onClick={converter}>Converter</button>
      <p className={resultadoAparecendo? "" : "escondido"}>BRL {valorInserido} = {moedaConvertida} {valorConvertido}</p>
    </div>
  );
}

export default App;
