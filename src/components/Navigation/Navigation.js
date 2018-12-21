import React from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';

import { fetch_post } from '../../graphql/Queries';

import './Navigation.scss';

const Navigation = props => {
        
        const links = {
            "Home" : { 
                to: "recent",
                displayText: "Recent Post"
            },
            "BlogPost" : {
                to: "/",
                displayText: "Home"
            },
            "About" : {
                to: "/",
                displayText: "Home"
            }
        }

        const nav_main = (
            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item">
                    <Query query={fetch_post}>
                        {
                            ( { data, loading }) => {
                                if(data){
                                    return (<Link to={links[props.page].to !== "recent" ?
                                        `${links[props.page].to}` :
                                        '/post/' + encodeURIComponent(data.posts[0].title)
                                    } 
                                        className="navigation__link"
                                    > 
                                            {`${links[props.page].displayText}`} 
                                    </Link>);
                                }
                                if(loading){
                                    return true;
                                }
                            }
                        }
                    </Query>
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
                        <h1>MegaBite</h1>
                    </div>
                </div>
            </header>);
}


export default Navigation;