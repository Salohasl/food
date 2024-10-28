import {Button} from "../../features/button/Button.jsx";
import React from "react";
import Header from "../../widgets/Header.jsx";

function Page(){
    return(
        <>
            <Header />
            <h1>Что приготовить: генератор блюд, когда очень лень</h1>
            <Button/>
        </>
    )
}

export default Page;
