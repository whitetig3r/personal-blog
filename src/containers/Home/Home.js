import React, { Component } from 'react';
import './Home.scss';

import Featured from '../FeaturedPosts/Featured';
import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Navigation/Navigation';

import vidJPG from '../../assets/video.jpg';

class Home extends Component{

    state = {
        navToggle: false
    }

    render(){
        const heading = (
        <h1 className="main__section__header">
            A few thoughts...
        </h1>);

        const heading_inv = (
        <h1 className="main__section__header__inverted">
            A few thoughts...
        </h1>);

        return (
            <div className="wrapper">
                    <Navigation 
                        setNavState={
                            () => this.setState({
                                navToggle: !this.state.navToggle
                            })
                        }

                        navToggle = {this.state.navToggle}
                        page = "Home"
                    />
                    <section className="main__section">
                            { !this.state.navToggle ? heading : heading_inv }
                            <div className="main__section__bg-video">
                              <img className="main__section__bg-video__content" src={vidJPG} alt="Delhi Street" />
                            </div>
                            <svg className="arrows">
                                <path className="a1" d="M0 0 L30 32 L60 0"></path>
                                <path className="a2" d="M0 20 L30 52 L60 20"></path>
                                <path className="a3" d="M0 40 L30 72 L60 40"></path>
                            </svg>
                    </section>
                    <section className="featured__section">
                      <Featured />
                    </section>
                    <section>
                      <Footer />
                    </section>
            </div>
        );
    }
}


export default Home;
