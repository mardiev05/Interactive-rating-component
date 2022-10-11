import styled from "styled-components";

export const AppDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: hsl(216, 12%, 8%);
    height: 100vh;
`


// Cart 

export const CartDiv = styled.div`
    width: 35%;
    background-color: hsl(213, 19%, 18%);
    border-radius: 15px;
    padding: 45px;
`

export const Star = styled.div`
    display: flex;
    width: 45px;
    height: 45px;
    background: hsl(213deg 16% 26%);
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    cursor: pointer;
`

export const CartTitle = styled.h1`
    color: hsl(0, 0%, 100%);
    font-size: 35px;
    font-family: sans-serif;
    font-weight: 400;
    margin: 20px 0 10px 0;
`

export const CartP = styled.p`
    color: #ccc;
    font-size: 15px;
    font-family: sans-serif;
    line-height: 25px;
`

export const UL = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style: none;
    color: #ccc;
    margin: 17px 0 25px 0;
`

export const LI = styled.li`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: hsl(213deg 16% 26%);
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 19px;
    font-family: sans-serif;
    cursor: pointer;
    transition: .3s ease-in-out;
    &:hover{
        background-color: hsl(25, 97%, 53%);
    }
`

export const Button = styled.button`
    width: 100%;
    padding: 8px 15px;
    border-radius: 13px;
    border: none;
    background-color: hsl(25, 97%, 53%);
    color: #fff;
    font-size: 18px;
    font-family: monospace;
    font-weight: 400;
    letter-spacing: 5px;
    margin-top: 15px;
    cursor: pointer;
    transition: .2s ease-in-out;
    &:hover{
        background-color: hsl(0, 0%, 100%);
        color: hsl(25, 97%, 53%);
    }
`

export const ErrorMsg = styled.p`
    color: #ff0000;
    font-weight: 600;
    font-size: 13px;
    font-family: sans-serif;
    text-align: end;
`

// Thank State

export const ThankDiv = styled.div`
    width: 35%;
    background-color: hsl(213, 19%, 18%);
    border-radius: 15px;
    padding: 45px;
    text-align: center;
`

export const SelectedNum = styled.div`
    border-radius: 15px;
    width: fit-content;
    background-color: hsl(213deg 16% 26%);
    color: hsl(25, 97%, 53%);
    padding: 8px 20px;
    font-size: 17px;
    font-weight: 400;
    font-family: monospace;
    margin: 30px auto;
`