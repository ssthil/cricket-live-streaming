import './App.css';

function App() {
  return (
    <div>
        <div className="video-container">
          <h1 className="title">PAK vs SL - Live ICC Cricket</h1>
          <div>
            Live streaming sponsored by <b>TON</b> 😊
          </div>
          <video id="videoPlayer" controls autoPlay muted></video>
        </div>
      </div>
  );
}

export default App;
