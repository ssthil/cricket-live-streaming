import React, { useEffect, useState } from 'react';
import ReactHlsPlayer from 'react-hls-player';
import './App.css';

function App() {
  const [url, setUrl] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setUrl('https://www.youtube.com/live/scbAmodSL14?si=CXcJTqeJM_kZYrV4')
    }, 2000)
  
    return cleanUp = () => {
      clearTimeout(timeoutId);
    }
  }, []);
  
  return (
    <div>
        <div className="video-container">
          <h3 className="title">Live streaming </h3>
          <div>
            Live streaming sponsored by <b>Senthil</b> 😊
          </div>
          {/* <video id="videoPlayer" controls autoPlay muted></video> */}
          {
            url === '' ? (
              <div style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
                <p>Loading...</p>
              </div>
            ) : (
              <ReactHlsPlayer
            src={url}
            autoPlay={true}
            controls={true}
            width="90%"
            height="auto"
            hlsConfig={{
              maxLoadingDelay: 4,
              minAutoBitrate: 0,
              lowLatencyMode: true,
            }}
          />
            )
          }
        </div>
      </div>
  );
}

export default App;
