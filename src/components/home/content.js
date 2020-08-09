import React from "react";
// import CardMenu from "./card-menu";
import "../../styles/home/content.css";
// import { update } from "ramda";


class Content extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            arrMenu: [...props.arrMenu]
        };
    }

    render() {
        return (
            <>
                <div className="content-menu">
                    <div className="col-md-12 bg-items">
                        <div className="row">
                            {this.state.arrMenu.map((item) => {
                                return (
                                    <div className="col-md-4 mt-4" key={item.id}>
                                        <img
                                            onClick={item.onChange = () => this.props.toggleMenu(item.id)}
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

            </>
        )
    }
}

export default Content