import React from 'react';
import './BlogCard.scss';
import { Link } from 'react-router-dom';


const BlogCard = props => {
    const textContent = (
        <div className="post__content__inner">
            <h1 className="post__content__inner__header">{props.title}</h1>
            <hr />
            <p className="post__content__inner__text">
                {props.preview}
                <Link to={`/post/${encodeURIComponent(props.title)}`} className="post__content__inner__link"><br />Continue Reading</Link>
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
