import { Link, NavLink } from 'react-router-dom';

export const VerticalNavbar = () => {
    /*return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">

            <Link className="navbar-brand" to="/">
                Bukin
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink className={(args) => `nav-item nav-link ${args.isActive ? 'active' : ''}`} to="/inicio">
                        Home
                    </NavLink>

                    <NavLink className={(args) => `nav-item nav-link ${args.isActive ? 'active' : ''}`} to="/reservar">
                        Reservar
                    </NavLink>

                    <NavLink className={(args) => `nav-item nav-link ${args.isActive ? 'active' : ''}`} to="/test1">
                        Test1
                    </NavLink>

                    <NavLink className={(args) => `nav-item nav-link ${args.isActive ? 'active' : ''}`} to="/test2">
                        Test2
                    </NavLink>
                </div>
            </div>

        </nav>
    )*/
    return (
        <>
            <div className="container text-center" style={{ backgroundColor: 'orange', borderStyle: 'solid' }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <Link style={{ textDecoration: "none", color: "black" }} to="/reservar">
                        Reservar
                    </Link>

                    <Link style={{ textDecoration: "none", color: "black" }} to="/test1">
                        Test1
                    </Link>

                    <Link style={{ textDecoration: "none", color: "black" }} to="/test2">
                        Test2
                    </Link>
                </div>
            </div>
        </>
    )
}