import React from 'react';
import './BlogCard.scss';
import { Link } from 'react-router-dom';
//container -post__content
// img - post__content-image
// overlay - post_content__inner
//text = post__Content__inner__text

const BlogCard = props => {
    const textContent = (
        <div className="post__content__inner">
            <h1 className="post__content__inner__header">{props.title}</h1>
            <hr />
            <p className="post__content__inner__text">
                {props.preview}
                <Link to="/post" className="post__content__inner__link">...Continue Reading</Link>
                <br /> <br/>
                <span className="post__content__inner__timestamp">Written on {props.published.substring(0,10)}</span>
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
