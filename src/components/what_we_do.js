import React from "react";
import styles from "./what_we_do.module.css";
import Title, { PinkPart } from "./title";
import Image from "@theme/IdealImage";

const DoBlock = ({ title, image_path, alt, text_div }) => {
  return (
    <div className={styles.flex_block}>
      <div className={styles.title_and_icon}>
        <Image className={styles.icon} img={image_path} alt={alt} />
        <h2>{title}</h2>
      </div>
      {text_div}
    </div>
  );
};

const slam_div = () => {
  return (
    <div>
      <p>Algorithmic work on all kind of 3D and SLAM problems:</p>
      <ul>
        <li>3D reconstruction</li>
        <li>Measurements</li>
        <li>Localization</li>
        <li>Mapping</li>
        <li>etc...</li>
      </ul>
      <p>Prior work all main 3D cameras:</p>
      <ul>
        <li>RealSense (Stereo, structured light, LiDAR)</li>
        <li>Kinect (azure, 360)</li>
        <li>Other camera phones (stereo, iPhone Lidar)</li>
      </ul>
    </div>
  );
};
const cv_div = () => {
  //https://en.wikipedia.org/wiki/Outline_of_computer_vision
  return (
    <div>
      <p>Specializing in neural networks as well as classic computer vision:</p>
      <ul>
        <li>Classification</li>
        <li>Object detection & tracking</li>
        <li>Segmentation</li>
        <li>Face recognition</li>
        <li>Pose estimation</li>
        <li>Feature extraction & matching</li>
        <li>OCR (optical charater recognition)</li>
        <li>etc...</li>
      </ul>
    </div>
  );
};
export default function WhatWeDo() {
  return (
    <section className={styles.container}>
      <Title>
        What We <PinkPart>Do Best</PinkPart>
      </Title>
      <div className={styles.flex_list}>
        <DoBlock
          title="Computer Vision"
          image_path="/img/what_we_do_icons/eye.svg"
          alt="eye icon"
          text_div={cv_div()}
        />
        <DoBlock title="3D & SLAM" image_path="/img/what_we_do_icons/ar.svg" alt="3D icon" text_div={slam_div()} />
        <DoBlock
          title="Data Science"
          image_path="/img/what_we_do_icons/data.svg"
          alt="data science icon"
          text={`test text.`}
        />
        <DoBlock
          title="Idea to Production"
          image_path="/img/what_we_do_icons/cloud_chip.svg"
          alt="cloud and chip icon"
          text={`test text.`}
        />
      </div>
    </section>
  );
}
