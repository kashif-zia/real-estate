/**
 * It returns a section element with a video element inside of it
 * @returns A video element with a source element.
 */
import React from "react";

const VideoSection = () => {
  return (
    <section className='breadcrumb-section p-0 property-main'>
      <video autoPlay muted loop data-vide-options='position: left' style={{ width: "100%", height: "500px", objectFit: "cover" }}>
        <source src='/assets/video/video.mp4' type='video/mp4'></source>
      </video>
    </section>
  );
};

export default VideoSection;
