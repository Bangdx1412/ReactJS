import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import music from "./videos/music.mp4";

function Video(props, ref) {
  const videoRef = useRef();
  useImperativeHandle(ref, () => ({
    play() {
      videoRef.current.play();
    },
    pause() {
      videoRef.current.pause();
    },
  }));
  //   const videoRef = useRef();
  return <video ref={videoRef} src={music} width={500} />;
}
export default forwardRef(Video);
