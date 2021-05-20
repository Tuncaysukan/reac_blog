import React from 'react'
import './singlepost.css';

export default function singlepost() {
    return (
        <div className="SinglePost">
            <div className="SinglePostWrapper">
                <img className="SinglePostImg"
                    src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt="" />
                <h1 className="SinglePostTitle">
                    Lorem ipsum dolor sit, amet
                        <div className="singlePostEdit">
                        <i className="singlePostIcon  fas fa-edit"></i>
                        <i className="singlePostIcon fas fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="author">
                        Author <b>Tncy</b>
                    </span>
                    <span className="data">
                         <b>1</b> Hour Ago
                    </span>
                </div>
                <p className="SinglePostData">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ad voluptas laboriosam cupiditate error, a reiciendis consequuntur, distinctio blanditiis quasi quod suscipit optio neque soluta labore temporibus. Inventore, consequuntur illum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ad voluptas laboriosam cupiditate error, a reiciendis consequuntur, distinctio blanditiis quasi quod suscipit optio neque soluta labore temporibus. Inventore, consequuntur illum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ad voluptas laboriosam cupiditate error, a reiciendis consequuntur, distinctio blanditiis quasi quod suscipit optio neque soluta labore temporibus. Inventore, consequuntur illum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ad voluptas laboriosam cupiditate error, a reiciendis consequuntur, distinctio blanditiis quasi quod suscipit optio neque soluta labore temporibus. Inventore, consequuntur illum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ad voluptas laboriosam cupiditate error, a reiciendis consequuntur, distinctio blanditiis quasi quod suscipit optio neque soluta labore temporibus. Inventore, consequuntur illum.
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ad voluptas laboriosam cupiditate error, a reiciendis consequuntur, distinctio blanditiis quasi quod suscipit optio neque soluta labore temporibus. Inventore, consequuntur illum.
                    </p>


            </div>
        </div>
    )
}
