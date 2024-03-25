import { Outlet } from "react-router-dom";
import Nav from "../Components/header/Nav";
import Footer from "../Components/Footer";

const Roots = () => {
    return (
        <div>

            <Nav></Nav>

            <div className="max-w-7xl mx-auto">
                <Outlet></Outlet>
            </div>

            
            <Footer></Footer>

        </div>
    );
};

export default Roots;