import {Button} from "../widgets/Button.jsx";
import Roulette from "../widgets/Roulette.jsx";
import React from "react";
import Header from "../widgets/Header.jsx";
import {Outlet} from "react-router-dom";

function Page(){
    return(
        <>
            <Header />
            <h1>Что приготовить: генератор блюд, когда очень лень</h1>
            <Button/>
            <Roulette/>
        </>
    )
}

export default Page;
