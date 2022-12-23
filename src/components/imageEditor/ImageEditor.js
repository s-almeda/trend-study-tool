import './ImageEditor.css';
import { useState } from 'react';
import { storage, db, fb } from '../../firebase/FirebaseInit.js';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

function ImageEditor({ user, image }) {
  function handleCancel(event) {
    // setImage(event.target.files[0]);
  }
  function handleShare(event) {
    // setImage(event.target.files[0]);
  }
  if (image) {
    return (
      <div>
        <div className='image-editor-display'>
          <div className='image-editor-username'>{user}'s new post</div>
          <img id='target' src={URL.createObjectURL(image)} />
          <div className='image-editor-filename'>{image.name}</div>
        </div>
        <div className='image-editor-panel'>
          <img id='target' src={URL.createObjectURL(image)} />
          <div className='image-editor-panel-content'>
            <div className='image-editor-sliders'>
              <div className='image-editor-title'>Edit</div>
            </div>
            <div className='image-editor-filters'>
              <div className='image-editor-title'>Filter</div>
            </div>
            <div className='image-editor-btns'>
              <button className='image-editor-cancel-btn'>Cancel</button>
              <button className='image-editor-share-btn'>Share post</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageEditor;
