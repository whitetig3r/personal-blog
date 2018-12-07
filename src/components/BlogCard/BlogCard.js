import React from 'react';
import './BlogCard.scss';

//import postImg from '../../assets/han.jpg';
//container -post__content
// img - post__content-image
// overlay - post_content__inner
//text = post__Content__inner__text

const BlogCard = props => {
    const textContent = (
        <div className="post__content__inner">
            <h1 className="post__content__inner__header">Blog Post #{props.in + 1}</h1>
            <hr />
            <p className="post__content__inner__text">
               {props.content}
            </p>
        </div>
    );

    return (
                <div className="post__card">
                    <div className="post__content">
                        {
                            textContent 
                        }
                    </div>
                </div>
      );
}

export default BlogCard;
