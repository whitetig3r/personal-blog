import React, { Component } from 'react';
import './About.scss';

import Footer from '../../components/Footer/Footer.js';
import Navigation from '../../components/Navigation/Navigation';

class Home extends Component {

    state = {
        navToggle: false
    }

    render() {

        return (
            <div className="wrapper">
                <Navigation
                    setNavState={
                        () => this.setState({
                            navToggle: !this.state.navToggle
                        })
                    }

                    navToggle={this.state.navToggle}
                    page="About"
                />
                <main className="about__section">

                </main>
                <section>
                    <Footer />
                </section>
            </div>
        );
    }
}


export default Home;
