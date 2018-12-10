import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import { fetch_post } from '../../graphql/Queries';
import Markdown from 'react-markdown';
import './BlogPost.scss';

import Footer from '../../components/Footer/Footer.js';


class Home extends Component {

    state = {
        navToggle: false
    }

    render() {
        const nav_main = (
            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item">
                        <Link to="/" className="navigation__link">Home</Link>
                    </li>
                    <li className="navigation__item">
                        <Link to="/post" className="navigation__link">Post</Link>
                    </li>
                </ul>
            </nav>
        );

        return (
            <div className="wrapper">
                <header>
                    <div className="navigation">

                        <input type="checkbox" onClick={() => { this.setState({ navToggle: !this.state.navToggle }) }} className="navigation__checkbox" id="navi-toggle" />
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

                <Query query={ fetch_post }>
                { 
                    ( { data, loading } ) => {

                        if (loading) return (<h1>Error fetching posts!</h1>);

                        if (data) {
                            const { posts } = data;
                                return (
                                <div>
                                    <section className="header__section">
                                        <div className="header__section__bg" style={{ backgroundImage: "url(https://www.gruppotreviroma.com/blog/wp-content/uploads/2018/07/mt-sample-background-1024x683.jpg)" }} />
                                    </section>

                                    <article className="blog__section__article">

                                        <main className="blog__section__article__content">

                                            <h1 className="blog__section__article__content__header">
                                                {
                                                    posts[0].title
                                                }
                                            </h1>

                                            <section className="blog__section__article__content__attributes">
                                                <span className="blog__section__article__content__attributes__author">
                                                    Written by { posts[0].author }
                                                    </span>
                                                <span className="blog__section__article__content__attributes__timestamp">
                                                    { posts[0].publishdate.substring(0,10) }    
                                                </span>
                                            </section>

                                            <hr className="horizontal__divider" />
                                            <div className="blog__section__article__content__blog">
                                                <Markdown source={posts[0].article} />
                                            </div>

                                        </main>

                                    </article>
                                </div>
                            )
                        }
                    }
                }
                </Query>
        
                <section>
                    <Footer/>
                </section>
            </div>);
    }
}

export default Home;
