import React, { Fragment } from "react";
import "../../styles/home/content.css";
import CardContent from "./card-content";
import { update } from "ramda";


class Content extends React.Component {

    constructor(props) {
        // console.log(props)
        super(props);
        this.state = {
            menus: [...props.menus]
        };
        this.handleCardChange = this.handleCardChange.bind(this);
    }
    handleCardChange(state) {
        const updatedCardMenu = this.state.menus.findIndex((menu) => {
            return menu.id === state.id;
        });
        this.setState(
            {
                menus: update(
                    updatedCardMenu,
                    {
                        ...this.state.menus[updatedCardMenu],
                        checked: state.checked,
                        quantity: state.quantity,
                    },
                    this.state.menus
                ),
            },
            this.handleMenusChange
        );
    }

    // componentDidMount() {
    //     console.log(this.props)
    //     this.setState({
    //         menus: [...this.props.menus]
    //     })
    // }
    componentDidUpdate(prevProps) {
        if (prevProps.menus !== this.props.menus) {
            this.setState({ menus: this.props.menus });
        }
    }
    renderCardContent(menu) {
        return (
            <CardContent
                handleCardChange={this.handleCardChange}
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

        // const { toggleMenu } = this.props
        // console.log(this.state.arrMenu)
        return (
            <Fragment key={this.props.menus}>
                <div className="box">
                    <div className="row">
                        {this.state.menus.map((menu) => {
                            return (

                                <div className="col-md-4">
                                    {this.renderCardContent(menu)}
                                </div>

                            );
                        })}
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Content