import React from "react";
import "../../styles/home/sidebar-right.css";
import AddFoodLogo from "../../assets/food-and-restaurant.png"


class Sidecart extends React.Component {
    render() {
        return (
            <>
                <div className="cart-items">
                    <img src={AddFoodLogo} alt=""/>
                        <div className="no-chart">
                            <h4 className="font-weight-bold">Your cart is empty</h4>
                            <p>Please add some items from the menu</p>
                        </div>
                </div>
            </>
        )
    }
}
export default Sidecart