import styled from 'styled-components';
import {Button} from "../widgets/Button.jsx";
import Roulette from "../widgets/Roulette.jsx";
import React from "react";

function Page(){

    const today = new Date();
    const ddMMyyyy = today.toLocaleDateString('ru-RU');

    return(
        <>
            <Header>
                <p>Персональный помощник</p>
            </Header>
            <Wrapper>
                <BlockMetrica>
                    <p>Для облегчения жизни и времени. <span>{ddMMyyyy}</span></p>
                    <Metrica>
                        <svg width="16" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M14.883 6.38a.86.86 0 000-.78 5.416 5.416 0 00-.44-.66c-.08-.1-.17-.22-.269-.37A7.761 7.761 0 007.986 1a7.755 7.755 0 00-6.179 3.51l-.25.33a6.4 6.4 0 00-.489.75.881.881 0 000 .79A8.15 8.15 0 002.116 7.9a7.69 7.69 0 005.87 3.1 7.694 7.694 0 005.929-3.2l.06-.1c.345-.408.65-.85.908-1.32zM.18 5.12a2.143 2.143 0 000 1.72 9.001 9.001 0 001.098 1.62l.06.07A8.538 8.538 0 007.986 12a8.593 8.593 0 006.717-3.58l.18-.23a7.45 7.45 0 00.908-1.36 1.832 1.832 0 000-1.7 4.75 4.75 0 00-.559-.83l-.26-.3a8.99 8.99 0 00-6.986-4A8.861 8.861 0 00.999 3.92l-.2.26a8.07 8.07 0 00-.619.94zM9.982 6a2.003 2.003 0 01-1.233 1.848A1.993 1.993 0 016.028 6.39a2.004 2.004 0 01.848-2.053A1.994 1.994 0 019.982 6zm.998 0a3.004 3.004 0 01-1.849 2.772 2.99 2.99 0 01-3.263-.65A3.002 3.002 0 017.986 3c.794 0 1.555.316 2.117.879.562.562.877 1.325.877 2.121z"
                                  fill="currentColor"></path>
                        </svg>
                        <span>1</span>
                    </Metrica>
                </BlockMetrica>
                <h1>Что приготовить: генератор блюд, когда очень лень</h1>
                <Button/>
                <Roulette/>
            </Wrapper>
        </>
    )
}

export default Page;


const Header = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

`;
const Wrapper = styled.div`
    color: rgb(0, 0, 0, .6);
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;
const BlockMetrica = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    gap: 20px;
`;
const Metrica = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`;