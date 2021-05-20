import React from 'react'
import './write.css'

export default function write() {
    return (
        <div className="write">
            <img 
            className="writeImg"
            src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            />
            <from className="writeForm">
                <div className="writeFormGroup">
                    <label  className="fileInput">
                        <i className="writeIcon fas  fa-plus"></i>
                    </label>
                    <input type="file" className='writeInput' id="fileInput" style={{display:'none'}}/>
                    <input type="text" className='writeInput' placeholder="Title"/>
                </div>
                <div className="writeFormGroup">
                    <textarea name="" placeholder='Tell Your Story..' className='writeInput writeText' id="" cols="30" rows="10"></textarea>
                </div>
                <button type="submit" className='writeSubmit'>Publish</button>
            </from>
        </div>
    )
}
