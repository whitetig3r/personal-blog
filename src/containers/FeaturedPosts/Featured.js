import React, { Component } from 'react';
import BlogCard from '../../components/BlogCard/BlogCard.js';
import './Featured.scss';
import { fetch_post } from '../../graphql/Queries.js';
import { Query } from 'react-apollo';

class Featured extends Component {

    state = {
        index: null
    }

    render(){     
        return(
            <div>
                <div className="main-row" style={{marginBottom:'0rem'}}>
                    <div className="main-col-1-of-2">
                        <h1 className="main-row__header">Recent Posts</h1>
                    </div>
                </div>
                <div className="main-row" style={{ marginBottom: '0rem' }}>
                    <div className="main-col-1-of-2">
                        <p className="main-row__p">
                            Lifestyle. Food. Technology. Innovation. More?
                        </p>
                    </div>
                </div>
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
                                                        image={post.imageHeaderLink}
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
