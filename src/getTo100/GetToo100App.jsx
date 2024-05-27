import React, { useState } from "react";
import Registration from './Registration.jsx';
import GameBoard from "./GameBoard.jsx";
function GetTo100App(){
    const [onRegis,SetOnRegist]= useState(true);
    function handleStartGame()
    {
        SetOnRegist(false); 
    }

    const[users,setUsers]= useState([]);
    return <>
     {onRegis? <Registration setUsers={setUsers} handleStartGame={handleStartGame}></Registration>:(
        <GameBoard users={users}></GameBoard>
    )}
    </>
   
}

export default GetTo100App;