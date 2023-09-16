import { useEffect, useState } from "react";

function Coin() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [asset, setAsset] = useState(0);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const onChange = (event) => {
    setName(event.target.selectedOptions[0].text.split(":")[0]);
    setPrice(parseFloat(event.target.value));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (asset === "") {
      return;
    }
    setAsset(0);
    console.log("Reset!");
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong> : null}
      <hr />
      <select onChange={onChange}>
        <option>Select Coin</option>
        {coins.map((coin) => (
          <option key={coin.id} value={coin.quotes.USD.price}>
            {coin.name} ({coin.symbol}): ${coin.quotes.USD.price.toFixed(4)} USD
          </option>
        ))}
      </select>
      <hr />
      <div>
        <form onSubmit={onSubmit}>
          <input
            onChange={(e) => setAsset(e.target.value)}
            value={asset}
            type="number"
            placeholder="Write your money"
          />
          <button>Reset</button>
        </form>
      </div>

      <h2>
        you've $ {asset}, you can buy{" "}
        {asset > 0 && price !== 0 ? (asset / price).toFixed(5) : 0} {name}.
      </h2>
    </div>
  );
}

export default Coin;
