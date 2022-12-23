import './ImageEditor.css';
import { useState } from 'react';
import { storage, db, fb } from '../../firebase/FirebaseInit.js';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

function ImageEditor({ user, image }) {
  // State to store uploaded file
  const [likes, setLikes] = useState('enter likes');
  const [reshares, setReshares] = useState('reshares');
  const [time, setTime] = useState('time');
  // progress
  const [progress, setProgress] = useState(0);
  // Handle image upload event and update state
  function handleChange(event) {
    // setImage(event.target.files[0]);
  }

  const handleUpload = () => {};
  if (image) {
    return (
      <div className='imageEditor'>
        <div className='image-editor-username'>{user}</div>
        <img id='target' src={URL.createObjectURL(image)} />
        <div className='image-editor-filename'>{image.name}</div>
      </div>
    );
  }
}

export default ImageEditor;
