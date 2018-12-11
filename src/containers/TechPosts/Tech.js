import React, { Component } from 'react';
import BlogCard from '../../components/BlogCard/BlogCard.js';
import './Tech.scss';
import { fetch_post } from '../../graphql/Queries';
import { Query } from 'react-apollo';

class Tech extends Component {

    state = {
        index: null
    }

    render() {
        return (
            <div>
                <h1 className="recent__header">Tech</h1>
                <div className="main-row">
                    <Query query={fetch_post}>
                        {
                            ({ data, loading }) => {
                                if (loading) return (<h1>Loading</h1>);
                                //console.log(data.posts);
                                return (data.posts.map((post, index) => (
                                    <div className="main-col-1-of-2">
                                        <BlogCard
                                            in={index}
                                            title={post.title}
                                            preview={post.postpreview}
                                            author={post.author}
                                            published={post.publishdate}
                                            content={post.title}
                                        />
                                    </div>))
                                )
                            }
                        }
                    </Query>
                </div>
            </div>
        );
    }
}

export default Tech;
