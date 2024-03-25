import { NavLink, useNavigate } from "react-router-dom";

const Nav = () => {
    const nav=useNavigate()
    return (

        <nav className="bg-gray-100 py-1">

            <div className="navbar max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to={'/'} className={({ isActive, isPending }) => isActive ? 'font-black text-blue-700 underline ' : 'font-black'}>Home</NavLink></li>


                            <li><NavLink to={'/AppliedJobs'} className={({ isActive, isPending }) => isActive ? 'font-black text-blue-700 underline ' : 'font-black'}>Applied Jobs</NavLink></li>

                        </ul>

                    </div>
                    <a className="btn btn-ghost text-xl">CareerHub</a>
                </div>
                <div className="navbar-center hidden lg:flex">

                    <ul className="flex items-center gap-8">

                        <li><NavLink to={'/'} className={({ isActive, isPending }) => isActive ? 'font-black text-blue-700 underline ' : 'font-black'}>Home</NavLink></li>


                        <li><NavLink to={'/AppliedJobs'} className={({ isActive, isPending }) => isActive ? 'font-black text-blue-700 underline ' : 'font-black'}>Applied Jobs</NavLink></li>


                    </ul>

                </div>
                <div className="navbar-end">
                    <a className="btn btn-primary text-white" onClick={()=>{
                     nav('/')
                     scrollBy(0,1000)
                  
                    
                    }}>Star Applying</a>
                </div>
            </div>


        </nav>
    );
};

export default Nav;