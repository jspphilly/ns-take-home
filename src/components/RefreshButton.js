import { useEffect, useState } from "react/cjs/react.development";
import { GrRefresh } from "react-icons/gr";
import "./RefreshButton.css";

const timerDefValue = 59;
export const RefreshButton = ({refreshFunc}) => {

    const [timerVal, setTimerVal] = useState(timerDefValue);

    useEffect(() => {
        const timer = setTimeout(() => {
            if(timerVal > 0){
                setTimerVal(timerVal-1);
            } else {
                setTimerVal(timerDefValue)
                refreshFunc();
            }
            
        }, 1000)

        return () => clearTimeout(timer);
        
    })

    function callRefreshFunc(){
        refreshFunc();
        setTimerVal(timerDefValue);
    }


    function handleClick(e){
        callRefreshFunc();
    }


    return (
        <button className="cr-refresh-button" onClick={handleClick}>
            <GrRefresh></GrRefresh>{timerVal}
        </button>
    )
}