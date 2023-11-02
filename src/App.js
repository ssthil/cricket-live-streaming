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
        "https://103.lfjustfor.xyz:8088/stream/lizata1/playlist.m3u8?vidictid=19663594820&id=43662&pk=be861b5b9a5a6cd40f1da003f7fe4d944404db6135722ad9abd4498207347ba2"
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
      url: "https://103.lfjustfor.xyz:8088/stream/lizata1/playlist.m3u8?vidictid=19663594820&id=43662&pk=be861b5b9a5a6cd40f1da003f7fe4d944404db6135722ad9abd4498207347ba2",
    },
    {
      name: "REPUBLIC",
      url: "https://weblive.republicworld.com/httppush/ottr_republic_english/chunklist_3.m3u8",
    },
    {
      name: "WION",
      url: "",
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
