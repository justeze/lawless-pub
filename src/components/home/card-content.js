import React from "react";
import check from "../../assets/add.png"

class CardContent extends React.Component {
    constructor(props) {
        // console.log(props)
        super(props);
        this.state = {
            id: props.id,
            name: props.name,
            price: props.price,
            image_path: props.image_path,
            quantity: props.quantity,
            checked: props.checked,
        };
        this.updateCard = this.updateCard.bind(this);
        this.toggleChecked = this.toggleChecked.bind(this);
    }

    toggleChecked = () => {
        this.setState(
            {
                quantity: 0,
                checked: !this.state.checked,
            },
            this.updateCard
        );
    };

    componentDidUpdate(prevProps) {
        if (prevProps.checked !== this.props.checked) {
            this.setState({ checked: this.props.checked });
        }
    }

    updateCard() {
        this.props.handleCardChange(this.state);
    }
    render() {
        if (this.state.checked) {
            return (
                <>

                    <div key={this.state.id} onClick={this.toggleChecked}>
                        <img className="img-fluid" src={this.state.image_path} alt="" />
                        <div className="checked-item">
                            <img src={check} alt="" />
                        </div>
                        <p>{this.state.name}</p>
                        <p className="price">Rp. {this.state.price}</p>
                    </div>
                </>
            );
        } else {
            return (

                <div key={this.state.id} onClick={this.toggleChecked}>
                    <img className="img-fluid" src={this.state.image_path} alt="" />
                    <p>{this.state.name}</p>
                    <p className="price">Rp. {this.state.price}</p>
                </div>

            );
        }
    }
}
export default CardContent