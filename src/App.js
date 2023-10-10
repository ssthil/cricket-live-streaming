import React from 'react';
import ReactHlsPlayer from 'react-hls-player';
import './App.css';

function App() {
  
  return (
    <div>
        <div className="video-container">
          <h1 className="title">PAK vs SL - Live ICC Cricket</h1>
          <div>
            Live streaming sponsored by <b>TON</b> 😊
          </div>
          {/* <video id="videoPlayer" controls autoPlay muted></video> */}
          <ReactHlsPlayer
            src="https://103.lfjustfor.xyz:8088/stream/hizata2/playlist.m3u8?vidictid=196406968349&id=42979&pk=f4a7efb169cc3e35ebc5ac271a9874b1bd0f60bb129740660f59c79bd2771f55"
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
        </div>
      </div>
  );
}

export default App;
