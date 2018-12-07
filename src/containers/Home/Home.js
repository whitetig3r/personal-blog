import React, { Component } from 'react';
import './Home.scss';

import Featured from '../FeaturedPosts/Featured.js';
import Footer from '../../components/Footer/Footer.js';

import vidMP4 from '../../assets/video.mp4';
import vidWEBM from '../../assets/video.webm';
import vidOGV from '../../assets/video.ogv';
import vidJPG from '../../assets/video.jpg';


class Home extends Component {

    state = {
        navToggle: false
    }

    render() {
        const heading = (
        <h1 className="main__section__header">
            Some Lifestyle
        </h1>);
        const heading_inv = (
            <h1 className="main__section__header__inverted">
                Some Lifestyle
        </h1>);

        const nav_main = (
            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item">
                        <a href="/" className="navigation__link">Sample 1</a>
                    </li>
                    <li className="navigation__item">
                        <a href="/" className="navigation__link">Sample 2</a>
                    </li>
                </ul>
            </nav>
        );

        return (
            <div className="wrapper">
                <header>
                    <div className="navigation">
                        <input type="checkbox" onClick={()=>{this.setState({navToggle:!this.state.navToggle})}} className="navigation__checkbox" id="navi-toggle"/>
                        <label htmlFor="navi-toggle" className="navigation__button">
                            <span className="navigation__icon">&nbsp;</span>
                        </label>
                        <div className="navigation__background">&nbsp;</div>
                        {
                            this.state.navToggle ? nav_main : true
                        }
                        <div className="logo__header">
                            <h1>MegaByte</h1>
                        </div>
                     </div>
                </header>
                    <section className="main__section">
                            { !this.state.navToggle ? heading : heading_inv }
                            <div className="main__section__bg-video">
                              <video className="main__section__bg-video__content" poster={vidJPG} autoPlay playsInline muted loop>
                                  <source src={vidMP4} type="video/mp4" />
                                  <source src={vidWEBM} type="video/webm" />
                                  <source src={vidOGV} type="video/ogg" />
                              </video>
                            </div>
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
