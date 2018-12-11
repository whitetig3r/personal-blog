import React from 'react';
import { Link } from 'react-router-dom';

import './Navigation.scss';

const Navigation = props => {
        
        const links = {
            "Home" : { 
                to: "/about",
                displayText: "About"
            },
            "BlogPost" : {
                to: "/",
                displayText: "Home"
            }
        }

        const nav_main = (
            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item">
                        <Link to={`${links[props.page].to}`} className="navigation__link"> {`${links[props.page].displayText}`} </Link>
                    </li>
                </ul>
            </nav>
        );

        return(
            <header>
                <div className="navigation">
                    <input type="checkbox" onClick={() => { 
                        props.setNavState();
                    }} 
                        className="navigation__checkbox" id="navi-toggle" />
                    <label htmlFor="navi-toggle" className="navigation__button">
                        <span className="navigation__icon">&nbsp;</span>
                    </label>
                    <div className="navigation__background">&nbsp;</div>
                    {
                        props.navToggle ? nav_main : true
                    }
                    <div className="logo__header">
                        <h1>MegaByte</h1>
                    </div>
                </div>
            </header>);
}


export default Navigation;