import React from "react";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => (
    <div>
        <div style={{position: 'absolute', right: 0}}>Switch</div>
        <Outlet />
    </div>
)

export default Layout;