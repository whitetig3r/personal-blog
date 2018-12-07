import React, { Component } from 'react';
import BlogCard from '../../components/BlogCard/BlogCard.js';
import './Featured.scss';


class Featured extends Component {

    arr = [1,2,3,4,5,6];

    placeholder = `
     lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
     when an unknown printer took a galley of type and scrambled it to make a type
     specimen book. It has survived not only five centuries, but also the leap into
     electronic typesetting, remaining essentially unchanged. It was popularised in
    `
    state = {
        index: null,
        content: this.arr.fill(this.placeholder)
    }

    render(){     
        return(
            <div>
                <h1 className="recent__header">WHAT'S NEW?</h1>
                <div className="main-row">
                    {
                        this.arr.map((obj,i)=>(
                            <div className="main-col-1-of-2">
                                <BlogCard in={i} content={this.state.content[i]} />
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default Featured;
