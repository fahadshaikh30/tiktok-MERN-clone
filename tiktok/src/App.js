import React from "react";
import "./App.css";
import Video from "./Video";

function App() {
  return (
    <div className="app">
      <h1> Lets build</h1>

      <div className="app__videos">
        <Video
          url="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
          channel="jimmyneutron"
          description="Rabbit Video"
          song="My Heart Will Go On"
          likes={1024}
          messages={512}
          shares={256}
        />
        <Video
          url="https://ak.picdn.net/shutterstock/videos/1055349194/preview/stock-footage-cute-little-red-cat-sleeping-on-floor-with-window-on-background-young-cute-little-red-kitty-long.webm"
          channel="timmyturner"
          description="Cat Video"
          song="Happy"
          likes={2048}
          messages={512}
          shares={256}
        />
      </div>
    </div>
  );
}

export default App;
