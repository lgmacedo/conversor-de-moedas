function App() {
  return (
    <div className="App">
      <p>Conversor Monetário</p>
      <input placeholder="Valor em real"></input>
      <select name="currencies" id="currencies">
        <option value="dolar">Dólar Americano</option>
        <option value="euro">Euro</option>
        <option value="libra">Libra Esterlina</option>
        <option value="peso">Peso Argentino</option>
      </select>
      <button>Converter</button>
    </div>
  );
}

export default App;
