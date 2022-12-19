
import "./ImageUpload.css";
import { useState } from "react";
import { storage, db, fb} from "../../firebase/FirebaseInit.js";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function ImageUpload({ user }) {
  // State to store uploaded file
  const [image, setImage] = useState("");
  const [likes , setLikes] = useState("enter likes");
  const [reshares , setReshares] = useState("reshares");
  const [time , setTime] = useState("time");
  // progress
  const [progress, setProgress] = useState(0);
  // Handle image upload event and update state
  function handleChange (event) {
    setImage(event.target.files[0]);
  }

  const handleUpload = () => {
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
        // download url
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
          console.log("uploaded image to this url:", url);
            db.collection("posts").add({
                timestamp: fbtime,
                time: timestring,
                likes: likes, 
                reshares: reshares,
                imageUrl: url,
                username: user,
              });
            //reset the form 

              setProgress(0);
              setLikes("enter likes")
              setReshares("reshares");
              setTime("time");
              setImage("");
             });
        }
  );
};
  
  return (
    <div className="imageUpload">
      <input placeholder="Enter likes" value={likes} 
      onChange={(e) => setLikes(e.target.value)}/>
      <input placeholder="Enter reshares" value={reshares} 
      onChange={(e) => setReshares(e.target.value)}/>
      <input placeholder="Enter time" value={time} 
      onChange={(e) => setTime(e.target.value)}/>
      <div className="uploadCapBtn">
        <input className = "uploadCap" type="file" onChange={handleChange} accept="/image/*" />
      </div>
      <button className="primary__button uploadBtn" onClick={handleUpload}>Upload!</button>
      <progress className="progress" value={progress} max="100" />
      
    </div>
  );
}

export default ImageUpload;