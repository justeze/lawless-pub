import React from "react";

import Navbar from "../components/home/navbar";
import Sidebar from "../components/home/sidebar-left";
import Sidecart from "../components/home/sidebar-right";
import Content from "../components/home/content";


class home extends React.Component {
    render() {
        return (
            <>
            <Navbar/>
            <Sidebar/>
            <Sidecart/>
            <Content/>
            </>
        )
    }
}

export default home;