import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import "./style.css"
const NewBlog = () => {
    const [value, setValue] = useState('');
  return (
    <div className='container-fluid row col-12 d-flex justify-content-center mt-4 '>
      <div className='iconSection col-lg-2'>
        <Link to="/" className='home'>H</Link>
        <div className='save'>S</div>
      </div>
      <div className='textArea col-lg-7'>
      <ReactQuill theme="snow" value={value} onChange={setValue} />
      </div>
    </div>
  )
}

export default NewBlog
