import { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';
import CryptoAdder from './components/CryptoAdder';
import { getCoinSymbolList, getInitialListData } from "./data/defaultList.js"
import { getUpdateOnAllCoins, listOfValidCoins } from './services/api';
import { transformAllValidCoinsToHash, updatePriceOnAllcoins } from './services/transforms';
import { RefreshButton } from './components/RefreshButton';



function App() {

  // Initial State
  // const [allValidCoins, setAllValidCoins] = useState({});
  const [coinObjList, setCoinObjList] = useState(getInitialListData())


  // TODO: routinely update prices, then compare with last price
  useEffect(() => {
    async function updateCoinPrices(){


    }
  })



  // Go get all other values
  // useEffect(
  //   // TODO:// add the value to the list, compare
  //   // and then query for more info
  // )

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Crypto Tracker
        </p>
      </header>
      <main className="cr-main">
        <div className='cr-toolbar'>
          <CryptoAdder addCoin={addCoin} ></CryptoAdder>
          <RefreshButton refreshFunc={refreshList}></RefreshButton>
        </div>
        <List coinObjArr={coinObjList}></List>
      </main >
       
    </div>
  );

  async function refreshList(){
    try{
      const updatedCoinPrices = await getUpdateOnAllCoins(coinObjList);

      setCoinObjList([
        ...updatePriceOnAllcoins(coinObjList, updatedCoinPrices)
      ])
    } catch(error){
      console.log(error)
    }
  }


  function addCoin(coin){
    // TODO: Validate coin
    setCoinObjList([...coinObjList, coin])
  }
}

export default App;
