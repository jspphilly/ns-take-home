
import { useState } from "react";
import { sortByProp } from "../util/util";
import { AiFillCaretUp, AiFillCaretDown } from 'react-icons/ai'
import { CryptoCard } from "./CryptoCard";
import "./List.css";
import { IconContext } from "react-icons/lib";

/**
 * 
 * @param coinObjArr ListObj[] 
 * 
 * interface ListObj {
 *      name: string,
 *      symbolName: string,
 *      price: string,
 *      increasedPrice: boolean | null,
 *      img: string,
 * }
 * 
 * @returns jsx
 */
export const List = ({coinObjArr}) => {

    const headers = [
        {
            name: 'Coin',
            fieldVal: 'name'
        },
        {
            name: 'Price',
            fieldVal: 'price'
        }
    ]

    // Sorting
    const [sortState, setSortState] = useState(null);
    const [sortField, setSortField] = useState(null);

    const sort = (currentSortVal) => { 
        const sortFunc = sortByProp(currentSortVal);
        determineSort(currentSortVal)
        coinObjArr.sort(sortFunc);
        if(sortState){
            coinObjArr.reverse();
        }
    }
    
    const determineSort = (currentSortVal) => {
        if(sortField !== currentSortVal){
            setSortField(currentSortVal);
        } 
        setSortState(!sortState)
    }
    
    return (
        <div className="cr-list">
            <div className="cr-list-header">
                {
                    headers.map( (header, index) => {
                        return (
                            <div key={index} onClick={() => sort(header.fieldVal)}>                           
                               {HeaderRender(header, index)}
                            </div>
                        )
                    }) 
                }

            </div>
            <div className="cr-list-body">
                {coinObjArr?.map((item,index) => {
                    return (
                        <CryptoCard key={index} data={item} id={index}></CryptoCard>
                    )
                })}
            </div>
           
        </div>
    );


    // UTILITY RENDER FUNCTIONS
    function renderSortState(currentSortVal) {
        if(currentSortVal === sortField){
            if(sortState != null){
                return (
                    <span className="cr-sort-icon">
                        <IconContext.Provider value={{className: 'cr-sort-icons'}}>
                            {sortState ? <AiFillCaretUp /> : <AiFillCaretDown />  }
                        </IconContext.Provider>
                    </span>
                )
            }
        }  
    }

    function HeaderRender(header, index)  {
        if(index) {
            return (
                <>
                    {renderSortState(header.fieldVal)}
                    {header.name} 
                </>
            )
        } else {
            return (
                <>
                    {header.name} 
                    {renderSortState(header.fieldVal)}
                </>
            )
        } 
    }
}






export default List;