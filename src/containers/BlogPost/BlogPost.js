import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { fetch_specific_post } from '../../graphql/Queries';
import Markdown from 'react-markdown';
import './BlogPost.scss';

import Footer from '../../components/Footer/Footer.js';
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

export default BlogPost;
