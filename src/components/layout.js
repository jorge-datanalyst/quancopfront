import React, {Fragment} from "react";
import Header from "./header";
import "./layout.css";
import Sidebar from "./sidebar";

const Layout = ({children}) => {
    return(
        <Fragment>
            <Header />
            <Sidebar />
            
        </Fragment>
    )
}

export default Layout;