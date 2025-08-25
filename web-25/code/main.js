import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

var target = document.getElementById("target");
var root   = ReactDOM.createRoot(target);
root.render(<LoveHate />);

function Status() {
  var list = ["Single", "Married", "Divorced", "Widowed"];
  var [current, update] = useState(0);
  return <button onClick={() => update( current + 1 == list.length ? 0 : current + 1)}>{list[current]}</button>
}

function Realtime() {
  const [current, update] = useState("...");
  return <>
           <button onClick={ () => update( refresh() ) }>Refresh</button>
           <pre>{current}</pre>
         </>
}

async function refresh() {
  const location = "https://api.coinbase.com/v2/prices/ETH-USD/spot";
  let result     = await fetch(location);
  return await result.text();
}

function Cryptocurrency() {
  const location = "https://api.coinbase.com/v2/prices/BTC-USD/spot";
  const [current, update] = useState("...");
  return <>
           <button onClick={ () => {update( async function() {
             let result = await fetch(location);
             return await result.text();
             } )} }>Refresh</button>
           <pre>{current}</pre>
         </>
}

function Coffee() {
  const data = ["Latte", "Mocha", "Cappuccino"];
  let list   = data.map( x => <button>{x}</button> );
  return <>
           <button>{data[0]}</button>
           <br/>
           {list}
         </>
}

function LoveHate() {
  var [current, f] = useState([])
  // var [current, f] = useState(["Test 1", "Test 2", "Test 3"])
  var list = current.map( x => <p>{x}</p> )
  return <>
           <button onClick={ () => f([... current, "Love"]) }>Love</button>
           <button onClick={ () => f([... current, "Hate"]) }>Hate</button>
           {list}
         </>
}


