import React from "react";
import "../../styles/home/content.css";
import CardContent from "./card-content";
import { update } from "ramda";


class Content extends React.Component {

    constructor() {
        // console.log(props)
        super();
        this.state = {
            menus: []
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
                image={menu.gambar_produk}
                checked={menu.checked}
            />
        )

    }
    render() {

        // const { toggleMenu } = this.props
        // console.log(this.state.arrMenu)
        return (
            <>
                <div className="box" key={this.state.menus}>
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
            </>
        )
    }
}

export default Content