import React, { useEffect, useState } from "react";
import ReactHlsPlayer from "react-hls-player";
import "./App.css";
import logo from "../src/logo.png";

function App() {
  const [url, setUrl] = useState("");
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      /* setUrl(
        "https://indiatoday-pdelivery.akamaized.net/indiatoday/video/2023_10/tooltips/10_oct_23_it_newstrack_pse_fullclip_1010_vt_nb_1024_512-preview.mp4"
      ); */
      setUrl(
        "https://vg-republictvlive.akamaized.net/v1/manifest/611d79b11b77e2f571934fd80ca1413453772ac7/vglive-sk-366023/c19b28b2-853d-4c86-b4a3-27ef071931e8/3.m3u8?ads.partner=Watcho&sessionId=a55ed05d-f199-4327-9107-18c7da601730"
      );
      // setUrl(
      //   "https://103.lfjustfor.xyz:8088/stream/lizata1/playlist.m3u8?vidictid=196413659337&id=43662&pk=f4a7efb169cc3e35ebc5ac271a9874b1bd0f60bb129740660f59c79bd2771f55"
      // );
      setIsMuted(false)
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const channels = [
    {
      name: "CRICKET",
      url: "https://103.lfjustfor.xyz:8088/stream/lizata1/playlist.m3u8?vidictid=196497500349&id=43662&pk=08589a6550277a55324fb0aa951e71d3c39d15d2412c8f8c8ba6579756b682e4",
    },
    {
      name: "REPUBLIC",
      url: "https://vg-republictvlive.akamaized.net/v1/manifest/611d79b11b77e2f571934fd80ca1413453772ac7/vglive-sk-366023/c19b28b2-853d-4c86-b4a3-27ef071931e8/3.m3u8?ads.partner=Watcho&sessionId=a55ed05d-f199-4327-9107-18c7da601730",
    },
    {
      name: "WION",
      url: "https://d7x8z4yuq42qn.cloudfront.net/index.m3u8?akes=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2OTc0MTUwOTR9.1VnC4dICZygTwiW3JhmkTMFH_4zBUuNhHQBvScZVx2s",
    },
  ];

  const handleClick = (item) => {
    console.log(item)
    setUrl(item)
    setIsMuted(false)
  }
console.log({url})
  return (
    <div>
      <div className="header">
        <div className="title">
          <img src={logo} alt="" className="logo" />
          <h4>GO LIVE </h4>
        </div>
        <p className="copyrights">
          ©2023 All Rights Reserved by <b>Senthil</b> 😊
        </p>
        <p className="copyrights-mobile">
          ©2023 by <b>Senthil</b> 😊
        </p>
      </div>
      <div className="video-container">
       {/*  {url === "" ? (
          <div
            style={{
              flex: 1,
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <p>Loading...</p>
          </div>
        ) : ( */}
          <div className="container">
            <div className="channels">
              {channels.map((channel) => (
                channel.url !== "" && <button key={channel.name} className="btn" onClick={() => handleClick(channel.url)}>
                  {channel.name}
                </button>
              ))}
            </div>
            <ReactHlsPlayer
              src={url}
              autoPlay={true}
              muted={isMuted}
              controls={true}
              height="auto"
              hlsConfig={{
                maxLoadingDelay: 4,
                minAutoBitrate: 0,
                lowLatencyMode: true,
              }}
              className="video-player"
            />
          </div>
        {/* )} */}
      </div>
    </div>
  );
}

export default App;
