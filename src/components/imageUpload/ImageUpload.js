
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
    setImage(event.target.images[0]);
  }

  const handleUpload = () => {
    console.log("uploading...!")
    if (!image) {
      alert("Please upload an image.");
    }
    const storageRef = ref(storage, "/images/${image.name}");
    // progress can be paused and resumed. It also exposes progress update
    // Receives the storage reference and the image to upload.
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        // update progress
        setProgress(progress);
      },

      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log("uploaded:", url);
          db.collection("posts").add({
              time: fb.firestore.FieldValue.serverTimestamp(),
              likes: likes, 
              reshares: reshares,
              imageUrl: url,
              username: user,
            });
            setProgress(0);
            setLikes("enter likes")
            setReshares("reshares");
            setTime("time");
            setImage(null);
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