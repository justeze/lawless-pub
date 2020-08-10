import React from "react";
import check from "../../assets/tick.png"
import "../../styles/home/card-content.css";

class CardContent extends React.Component {
    constructor(props) {
        // console.log(props)
        super(props);
        this.state = {
            id: props.id,
            name: props.name,
            price: props.price,
            image: props.image,
            checked: props.checked,
        };
        // this.updateCard = this.updateCard.bind(this);
        // this.toggleChecked = this.toggleChecked.bind(this);
    }

    toggleChecked = () => {
        this.setState(
            {
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
                    <div className="content" key={this.state.id} onClick={this.toggleChecked}>
                        <div className="content-image">
                            <img className="img-fluid" src={this.state.image} alt="" />
                            <div className="checked-item">
                                <img src={check} alt="" />
                            </div>
                        </div>
                        <div className="desc-content">
                            <p>{this.state.name}</p>
                            <p className="price">Rp. {this.state.price}</p>
                        </div>
                    </div>
                </>
            );
        } else {
            return (

                <div className="content" key={this.state.id} onClick={this.toggleChecked}>
                    <div className="content-image">
                        <img className="img-fluid" src={this.state.image} alt="" />
                    </div>
                    <div className="desc-content">
                        <p>{this.state.name}</p>
                        <p className="price">Rp. {this.state.price}</p>
                    </div>
                </div>

            );
        }
    }
}
export default CardContent