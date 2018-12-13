import React, { Component } from 'react';
import BlogCard from '../../components/BlogCard/BlogCard.js';
import './Featured.scss';
import { fetch_post } from '../../graphql/Queries';
import { Query } from 'react-apollo';

class Featured extends Component {

    state = {
        index: null
    }

    render(){     
        return(
            <div>
                <h1 className="recent__header">FEATURED</h1>
                <div className="main-row">
                    <Query query={fetch_post}>
                        {   
                            ({ data, loading }) => {

                                    if (loading) return (<div style={{height: '20vh'}}/>);
                                    return (data.posts.map( (post,index) => (
                                                <div key={index} className="main-col-1-of-2">
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

export default Featured;
