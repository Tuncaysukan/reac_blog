import React from 'react'
import './post.css'

export default function post() {
    return (
        <>
            <div className="post">
                <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                <div className="postInfo">
                    <span className="postcat">
                        Music
                </span>
                    <span className="postcat">
                        Life
                </span>
                    <span className="postTitle">
                        Lorem İpsum Dolor Sit Amet
               </span>
                    <hr />
                    <span className="postDate">
                        1 Hour Ago
                </span>
                </div>
<p className="postDesc">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore labore laboriosam itaque, distinctio voluptatibus voluptatem quod id veniam impedit tempora optio exercitationem velit, fugit reprehenderit, quae quas quisquam maxime aut?
</p>
            </div>
        </>
    )
}
