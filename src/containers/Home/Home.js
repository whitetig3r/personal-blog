import React, { Component } from 'react';
import './Home.scss';

import Featured from '../FeaturedPosts/Featured.js';
import Footer from '../../components/Footer/Footer.js';
import Navigation from '../../components/Navigation/Navigation';

import vidMP4 from '../../assets/video.mp4';
import vidWEBM from '../../assets/video.webm';
import vidJPG from '../../assets/video.jpg';

class Home extends Component{

    state = {
        navToggle: false
    }

    render(){
        const heading = (
        <h1 className="main__section__header">
            Lifestyled.
        </h1>);

        const heading_inv = (
        <h1 className="main__section__header__inverted">
            Lifestyled.
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
                              <video className="main__section__bg-video__content" poster={vidJPG} autoPlay playsInline muted loop>
                                  <source src={vidMP4} type="video/mp4" />
                                  <source src={vidWEBM} type="video/webm" />
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
