//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="app">
      
      <div class="user-data">
        <div class="user-data-text">
          <div class="my-username">timoteayang</div>
          <div class="my-metadata">
            <div class="my-likes">
              <svg
                height="48"
                viewBox="0 0 48 48"
                width="48"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path d="M0 0h48v48h-48z" fill="none" />
                <path
                  d="M24 42.7l-2.9-2.63c-10.3-9.35-17.1-15.52-17.1-23.07 0-6.17 4.83-11 11-11 3.48 0 6.82 1.62 9 4.17 2.18-2.55 5.52-4.17 9-4.17 6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07l-2.9 2.63z"
                />
              </svg>
              102 total likes
            </div>
            <div class="my-reshares">
              <svg
                height="48"
                viewBox="0 0 48 48"
                width="48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h48v48H0z" fill="none" />
                <path
                  d="M24 10V2L14 12l10 10v-8c6.63 0 12 5.37 12 12s-5.37 12-12 12-12-5.37-12-12H8c0 8.84 7.16 16 16 16s16-7.16 16-16-7.16-16-16-16z"
                />
              </svg>
              34 total reshares
            </div>
          </div>
        </div>
        <label for="upload-post" class="create-btn">
          <svg
            height="48"
            viewBox="0 0 48 48"
            width="48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h48v48h-48z" fill="none" />
            <path
              d="M26 14h-4v8h-8v4h8v8h4v-8h8v-4h-8v-8zm-2-10c-11.05 0-20 8.95-20 20s8.95 20 20 20 20-8.95 20-20-8.95-20-20-20zm0 36c-8.82 0-16-7.18-16-16s7.18-16 16-16 16 7.18 16 16-7.18 16-16 16z"
            />
          </svg>
          <div class="create-btn-label">Create</div>
        </label>
        <input
          type="file"
          id="upload-post"
          name="upload-post"
          accept="image/png, image/jpeg"
        />
      </div>
      <div class="post mx-auto">
        <div class="post-users">
          <div class="post-username">tim</div>
          <div class="post-source"></div>
        </div>
        <div class="post-image">
          <img
            src="https://images.pexels.com/photos/14256737/pexels-photo-14256737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </div>
        <div class="post-metadata">
          <div class="post-time">4 minutes ago</div>
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
            <div class="post-like-count">3.2k</div>
          </div>
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
            <div class="post-reshare-count">925</div>
          </div>
        </div>
      </div>
      <div class="post mx-auto">
        <div class="post-users">
          <div class="post-username">shm</div>
          <div class="post-source"></div>
        </div>
        <div class="post-image">
          <img
            src="https://images.pexels.com/photos/14256397/pexels-photo-14256397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </div>
        <div class="post-metadata">
          <div class="post-time">3 hours ago</div>
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
            <div class="post-like-count">109</div>
          </div>
          <div class="post-reshare">
            <div class="post-reshare-btn">
              <svg
                height="48"
                viewBox="0 0 48 48"
                width="48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h48v48H0z" fill="none" />
                <path
                  d="M24 10V2L14 12l10 10v-8c6.63 0 12 5.37 12 12s-5.37 12-12 12-12-5.37-12-12H8c0 8.84 7.16 16 16 16s16-7.16 16-16-7.16-16-16-16z"
                />
              </svg>
            </div>
            <div class="post-reshare-count">27</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
