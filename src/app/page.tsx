import Image from "next/image";
import { Omikuji } from "./components/omikuji";
import { Bg } from "./components/bg";

export default function Home() {
  return (
    <div>
      {/* 動画を再生できる */}
      {/* <video width="600" controls playsInline>
        <source src="/Untitled design 315x400.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <Omikuji />
      <Bg />
    </div>
  );
}
