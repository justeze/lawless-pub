import React from "react";
import "./styles/card-menu.css";

class CardMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            name: props.nama_produk,
            price: props.harga_produk,
            image: props.gambar_produk,
            quantity: props.qty,
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
        return (
            <>
                <div className="content">
                    <div className="content-menu">
                        <div className="col-md-12 bg-items">
                            <div className="row">
                                {this.props.arrMenu.map((item) => {
                                    return (
                                        <div className="col-md-4 mt-4" key={item.id}>
                                            <img
                                                onClick={item.onChange = () => this.toggleMenu(item.id)}
                                                src={item.gambar_produk}
                                                alt="img-espresso"
                                                className="img-fluid"
                                            />
                                            <p>{item.nama_produk}</p>
                                            <p className="price">Rp. {item.harga_produk}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default CardMenu