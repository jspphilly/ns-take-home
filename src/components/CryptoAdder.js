import React from "react";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { getCoinPrice } from "../services/api";
import "./CryptoAdder.css";
import { cyrptoHash } from "../data/cryptoList";
import { transformApiCoinToCoinObj } from "../services/transforms";



/**
 * 
 * @param {Function} updateList 
 * @returns 
 */
export const CryptoAdder = ({addCoin}) => {

    const [input, setInput] = useState('');
    const [validCoin, setValidCoin] = useState(false);

    async function handleAddCoin(){
        try {
            const response = await getCoinPrice(input);
            if (!response.ok) {
                let err = new Error(`HTTP status code: ${response.status}`)
                const message = await response.json();
                err.message = `Message from the API: \n ${message.errors[0].message}`;
                throw err;
            }
            const json = await response.json();
            const coinObj = transformApiCoinToCoinObj(json.data);
            addCoin(coinObj);
        } catch(err){
            alert(err.message)
        }
    }

    function handleKeyDown(e){
        if(e.keyCode === 13){
            handleAddCoin();
            e.preventDefault();
        }
    }

    function handleInputChange(e){
        const value = e.target.value;

        setInput(value);
        setValidCoin(false);
        // NOTE: this check isn't fool proof, there's a
        // chance that there's a valid hash value
        // that coinbase doesn't carry, in which case
        // it'll let you click the button, but won't 
        // add anything.  With a pro version of coinbase API
        // this could be averted
        if(cyrptoHash[value.toUpperCase()]){
            setValidCoin(true);
        } 
    }

    return (
        <div className="cr-crypto-adder">
            <input 
                type="text" 
                placeholder="Enter Coin here" 
                value={input}
                onKeyDown={handleKeyDown}
                onInput={handleInputChange}
                >

            </input>
            <button onClick={handleAddCoin} 
                className={`cr-crypto-adder-btn
                 ${ validCoin ? 'active' : ''}`}
                >
                Track Coin <IoMdAdd fontSize="1.5em"></IoMdAdd>
            </button>
        </div>
    )
}

export default CryptoAdder;