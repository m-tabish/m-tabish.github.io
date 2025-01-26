import { NavLink } from "react-router-dom"
import { Btn } from "./exportComp"
import { useNavigate } from "react-router-dom"


const Navbar = () => {
    const navigate = useNavigate();
    return (
        <nav className='sm:h-16 h-16 w-4/5 py-3 mb-5 flex justify-center border-none'>
            {/* mid */}
            <div className="flex gap-5 border-none">
                <NavLink to="/" className={(isActive) => `text-${isActive ? "accent" : "white"}  `}>
                    <button onClick={() => navigate('/')}>Home</button>
                </NavLink>

                <NavLink to="/projects" className={`text-white opacity-15`}>
                    <button onClick={() =>navigate('/projects')}>Projects</button>
                </NavLink>

            </div>

        </nav>
    )
}

export default Navbar
