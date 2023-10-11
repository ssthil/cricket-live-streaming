import React, { useEffect, useState } from 'react';
import ReactHlsPlayer from 'react-hls-player';
import './App.css';

function App() {
  const [url, setUrl] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setUrl('https://vg-republictvlive.akamaized.net/v1/manifest/611d79b11b77e2f571934fd80ca1413453772ac7/vglive-sk-366023/c19b28b2-853d-4c86-b4a3-27ef071931e8/3.m3u8?ads.partner=Watcho&sessionId=a55ed05d-f199-4327-9107-18c7da601730')
    }, 2000)
  
    return () => {
      clearTimeout(timeoutId);
    }
  }, []);
  
  return (
    <div>
        <div className="video-container">
          <div className='title'>
          ©2023 All Rights Reserved by <b>Senthil</b> 😊
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
            muted={true}
            controls={true}
            width="90%"
            height="auto"
            hlsConfig={{
              maxLoadingDelay: 4,
              minAutoBitrate: 0,
              lowLatencyMode: true,
            }}
            style={{border: '6px solid #333'}}
          />
            )
          }
        </div>
      </div>
  );
}

export default App;
