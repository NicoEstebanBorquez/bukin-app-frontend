import { Link, NavLink } from 'react-router-dom';

export const MobileNavbar = () => {

    const back = () => {
        history.back()
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    {/*<NavLink className={(args) => `nav-item nav-link ${args.isActive ? 'active' : ''}`} to="/inicio">
                        <span style={{ fontSize: 40 }}>←</span>
                    </NavLink>*/}

                    <button onClick={back}>Go Back</button>


                </div>
            </div>

        </nav>
    )
}