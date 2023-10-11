import React, { useEffect, useState } from 'react';
import ReactHlsPlayer from 'react-hls-player';
import './App.css';

function App() {
  const [url, setUrl] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // setUrl('https://vg-republictvlive.akamaized.net/v1/manifest/611d79b11b77e2f571934fd80ca1413453772ac7/vglive-sk-366023/c19b28b2-853d-4c86-b4a3-27ef071931e8/3.m3u8?ads.partner=Watcho&sessionId=a55ed05d-f199-4327-9107-18c7da601730')
      setUrl('https://103.lfjustfor.xyz:8088/stream/lizata1/playlist.m3u8?vidictid=196413659337&id=43662&pk=f4a7efb169cc3e35ebc5ac271a9874b1bd0f60bb129740660f59c79bd2771f55')
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
                height="auto"
                hlsConfig={{
                  maxLoadingDelay: 4,
                  minAutoBitrate: 0,
                  lowLatencyMode: true,
                }}
                className='video-player'
          />
            )
          }
        </div>
      </div>
  );
}

export default App;
