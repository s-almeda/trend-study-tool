import './ImageEditor.css';
import { useState, useEffect, useRef } from 'react';
import { storage, db, fb } from '../../firebase/FirebaseInit.js';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';


function ImageEditor({ user, image, closeEditor }) {
  const [hue, setHue] = useState(0);
  const [saturation, setSaturation] = useState(0);
  const [brightness, setBrightness] = useState(0);
  const [contrast, setContrast] = useState(0);
  
  // meta data
  const [likes , setLikes] = useState("enter likes");
  const [reshares , setReshares] = useState("reshares");

  // progress bar
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    window.Caman('#newImage', function () {
      this.hue(hue);
      this.brightness(brightness);
      this.saturation(saturation);
      this.contrast(contrast);
      this.render();
    });
  }, [hue, brightness, saturation, contrast]);

  function changeHue(event) {
    setHue(parseInt(event.target.value));
    // changeImage();
  }

  function changeSaturation(event) {
    setSaturation(parseInt(event.target.value));
    // changeImage();
  }

  function changeBrightness(event) {
    setBrightness(parseInt(event.target.value));
    // changeImage();
  }

  function changeContrast(event) {
    setContrast(parseInt(event.target.value));
    // changeImage();
  }

  function handleCancel(event) {
    closeEditor();
  }
  function handleShare(event) {
    console.log("uploading...!")
    if (!image) {
      alert("Please upload a valid image.");
    }
    
    const uploadTask = storage.ref(`images/${image.name}`).put(image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        //update progress...
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },

      (err) => console.log(err), //error function..

      () => { //complete function:
        const fbtime = fb.firestore.Timestamp.now(); //get timestamp from firebase
        //TODO: Make this timestring cute, so it says something like "4 minutes ago". this will probably require calling a separate function
        const timestring = new Date(fbtime.seconds*1000).toLocaleDateString();
        // add to storage so we have a URL...
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => { //once you get the URL...
            console.log("uploaded image to this url:", url);
            //add this image to the database...
            db.collection("posts").add({
                  timestamp: fbtime,
                  time: timestring,
                  likes: likes, 
                  reshares: reshares,
                  imageUrl: url,
                  username: user,
                });
            setProgress(0);
            setLikes("enter likes")
            setReshares("reshares");
            closeEditor();
            });
      }
  );//end of uploadTask


}; //end of handleShare function

  if (image) {
    return (
      <div>
        <div className='image-editor-display'>
          <div className='image-editor-username'>{user}'s new post</div>
          <img id='newImage' src={URL.createObjectURL(image)} />
          <div className='image-editor-filename'>{image.name}</div>
        </div>
        <div className='image-editor-panel'>
          <img src={URL.createObjectURL(image)} />
          <div className='image-editor-panel-content'>
            <div className='image-editor-sliders'>
              <div className='image-editor-title'>Edit</div>
              <div>
                <input
                  type='range'
                  id='hue'
                  name='hue'
                  min='0'
                  max='100'
                  value={hue}
                  onChange={changeHue}
                />
                <label for='hue'>Hue {hue}</label>
              </div>
              <div>
                <input
                  type='range'
                  id='saturation'
                  name='saturation'
                  min='-100'
                  max='100'
                  value={saturation}
                  onChange={changeSaturation}
                />
                <label for='saturation'>Saturation {saturation}</label>
              </div>
              <div>
                <input
                  type='range'
                  id='volume'
                  name='volume'
                  min='-100'
                  max='100'
                  value={brightness}
                  onChange={changeBrightness}
                />
                <label for='brightness'>Brightness</label>
              </div>
              <div>
                <input
                  type='range'
                  id='contrast'
                  name='contrast'
                  min='-50'
                  max='50'
                  value={contrast}
                  onChange={changeContrast}
                />
                <label for='contrast'>Contrast</label>
              </div>
            </div>
            <div className='image-editor-filters'>
              <div className='image-editor-title'>Filter</div>
            </div>

           <input placeholder="Enter likes" value={likes} 
           onChange={(e) => setLikes(e.target.value)}/>
           <input placeholder="Enter reshares" value={reshares} 
            onChange={(e) => setReshares(e.target.value)}/>
           <progress className="progress" value={progress} max="100" />

            <div className='image-editor-btns'>
              <button
                className='image-editor-cancel-btn'
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button className='image-editor-share-btn' onClick={handleShare}>Share post</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageEditor;
