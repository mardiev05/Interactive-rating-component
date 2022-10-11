import { useContext } from "react"
import { ThankDiv, CartP, CartTitle, SelectedNum } from "../styles/Elements.styles"
import ThankSvg from "../images/illustration-thank-you.svg"
import { Store } from "../context/store"




const ThankState = () => {
    const { data } = useContext(Store)

    return <ThankDiv>
        <img src={ThankSvg} alt="" />
        <SelectedNum>
            You selected {data} out of 5
        </SelectedNum>
        <div className="thank-content">
            <CartTitle>Thank You!</CartTitle>
            <CartP>
                We appreciate you taking the time to give a rating.
                If you ever need more support, don't hesitate to get in touch!
            </CartP>
        </div>
    </ThankDiv>
}

export default ThankState