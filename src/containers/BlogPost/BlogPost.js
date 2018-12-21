import React, { Component } from 'react';
import { Query } from 'react-apollo';
import ProgressiveImage from 'react-progressive-image';
import { fetch_specific_post } from '../../graphql/Queries';
import Markdown from 'react-markdown';
import './BlogPost.scss';

import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Navigation/Navigation';


class BlogPost extends Component {

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
                    page = "BlogPost"
                />
                <Query query={ fetch_specific_post } variables={{ title: decodeURIComponent(this.props.match.params.id) }}>
                { 
                    ( { data, loading } ) => {

                        if (loading) return (<div style={{height: '20vh'}}/>);

                        if (data) {
                            const { posts } = data;
                                return (
                                <div>
                                    <section className="header__section">
                                            <ProgressiveImage src={[posts[0].imageHeaderLink]} placeholder="post-header.jpg">
                                            {
                                                (src, loading) => (
                                                    <div className="header__section__bg" style={{ backgroundImage: `linear-gradient(to top right, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.25)), url(${src})`, backgroundColor: loading ? "black" : "transparent" }} />
                                            )
                                        }
                                        </ProgressiveImage>
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
                                                    { new Date(posts[0].publishdate).toUTCString().slice(0,-13) }    
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

export default BlogPost;
