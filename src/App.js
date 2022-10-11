import { useContext } from "react";
import { Store } from "./context/store";
import { AppDiv } from "./styles/Elements.styles"
import Cart from './components/Cart';
import ThankState from './components/ThankState';
import './App.css';

function App() {
    const { completed } = useContext(Store)
    return (
        <AppDiv>
            {completed ? <ThankState /> : <Cart />}
        </AppDiv>
    );
}

export default App;
