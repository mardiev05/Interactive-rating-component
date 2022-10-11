import { useContext } from "react"
import { CartDiv, CartP, CartTitle, LI, Star, UL, Button, ErrorMsg } from "../styles/Elements.styles"
import St from "../images/icon-star.svg"
import { Store } from "../context/store"




const Cart = () => {
    const { getNum, onSubmit, err } = useContext(Store)
    const nums = [1, 2, 3, 4, 5]

    return <CartDiv>
        <Star>
            <img src={St} alt="" />
        </Star>
        <div className="cart-content">
            <CartTitle>How did we do?</CartTitle>
            <CartP>
                Please let us know how we did with your support request.
                All feedback is appreciated to help us improve our offering!
            </CartP>
        </div>
        <UL>
            {nums.map((i, index) => (
                <LI id={i} key={index} onClick={() => getNum(i)}>{i}</LI>
            ))}
        </UL>
        <ErrorMsg>{err}</ErrorMsg>
        <Button onClick={onSubmit}>Submit</Button>
    </CartDiv>
}

export default Cart