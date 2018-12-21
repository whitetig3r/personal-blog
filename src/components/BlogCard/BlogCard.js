import React from 'react';
import './BlogCard.scss';
import { Link } from 'react-router-dom';


const BlogCard = props => {
    const textContent = (
        <div className="post__content__inner">
            <h1 className="post__content__inner__header">{props.title}</h1> <hr />
            <span className="post__content__inner__timestamp">Written on {new Date(props.published).toUTCString().slice(0,-13)}</span>
        </div>
    );

    return (
            <Link to={`/post/${encodeURIComponent(props.title)}`} className="post__content__inner__link">
            <div className="post__card" style={{ background:`linear-gradient( to top, rgba(0,0,0,0.9), rgba(0, 0, 0, 0) ),url(${props.image})`}}>
                        <div className="post__content">
                            {
                                textContent
                            }
                        </div>
                    </div>
            </Link>
      );
}

export default BlogCard;
