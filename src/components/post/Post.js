import React from "react";
import "./Post.css";

function Post({username, time, imageUrl, likes, reshares}) {
  return (
    <div className="post mx-auto">
      {/* Header with username */}
      <div className="post__header">
        <div class="post-username">{username}</div>
      </div>
      {/* Image */}
      <img className="post-image" src={imageUrl} alt="" />

      {/* metadata */}
      <div class="post-metadata">
        <div class="post-time">{time}</div>      
        {/*like button*/} 
        <div class="post-like">
              <div class="post-like-btn">
                <svg
                  height="48"
                  viewBox="0 0 48 48"
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 42.7l-2.9-2.63c-10.3-9.35-17.1-15.52-17.1-23.07 0-6.17 4.83-11 11-11 3.48 0 6.82 1.62 9 4.17 2.18-2.55 5.52-4.17 9-4.17 6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07l-2.9 2.63z"
                  />
                </svg>
              </div>
              <div class="post-like-count">{likes}</div>
        </div>
        {/*reshare button*/} 
        <div class="post-reshare">
          <div class="post-reshare-btn">
            <svg
              height="48"
              viewBox="0 0 48 48"
              width="48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 10V2L14 12l10 10v-8c6.63 0 12 5.37 12 12s-5.37 12-12 12-12-5.37-12-12H8c0 8.84 7.16 16 16 16s16-7.16 16-16-7.16-16-16-16z"
              />
            </svg>
          </div>
          <div class="post-reshare-count">{reshares}</div>
        </div>
      </div>
    {/*end of metadata*/}
    </div>
  );
}

export default Post;



