import React from "react";
import CardMenu from "./card-menu";
import "../../styles/home/content.css";
// import { update } from "ramda";


class Content extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            arrMenus: props.arrMenus,
            menus: [...props.menus]
        };
    }

   

    componentDidUpdate(prevProps) {
        if (prevProps.menus !== this.props.menus) {
          this.setState({ menus: this.props.menus });
        }
      }

    

    renderCardMenu(menu) {

        return (
            <CardMenu
                
                key={menu}
                id={menu.id}
                name={menu.nama_produk}
                price={menu.harga_produk}
                image_path={menu.gambar_produk}
                quantity={menu.qty}
                checked={menu.checked}
            />
        )
    }

    render() {
        return (
            <>
                <div key={this.props.menus}>
                    {this.state.menus.map((item) => {
                        return (
                            <div>
                                {this.renderCardMenu(item)}
                            </div>
                        )
                    })}
                </div>
            </>
        )
    }
}
export default Content