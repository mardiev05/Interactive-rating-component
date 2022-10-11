import { createContext, useState } from "react";

export const Store = createContext()

const StoreProvider = ({ children }) => {
    const [currentNum, setCurrentNum] = useState(null)
    const [data, setData] = useState(null)
    const [completed, setCompleted] = useState(false)
    const [err, setErr] = useState("")

    const getNum = (num) => {
        setCurrentNum(num)
    }

    const onSubmit = () => {
        if (currentNum) {
            setData(currentNum)
            setCompleted(true)
        } else {
            setErr("Select any number")
        }

    }
    console.log(data)

    return <Store.Provider value={{ data, getNum, err, onSubmit, completed }}>
        {children}
    </Store.Provider>
}

export default StoreProvider