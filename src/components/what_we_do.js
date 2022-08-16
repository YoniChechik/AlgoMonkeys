import React from "react";
import styles from "./what_we_do.module.css";
import Title, { PinkPart } from "./title";

const DoBlock = ({ title, svg_path, alt, text_div }) => {
  return (
    <div className={styles.flex_block}>
      <div className={styles.title_and_icon}>
        <img className={styles.icon} img={svg_path} alt={alt} />
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
      <p>Prior work with all main 3D cameras:</p>
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

const ds_div = () => {
  return (
    <div>
      <p>Extracting insights from structured data using machine learning and math:</p>
      <ul>
        <li>Classification</li>
        <li>Regression</li>
        <li>Unsupervised learning (e.g. clustering)</li>
        <li>Time series forecasting</li>
        {/* <li>Reinforcement learning</li> */}
        <li>Decision trees</li>
        <li>etc...</li>
      </ul>
    </div>
  );
};

const prod_div = () => {
  return (
    <div>
      <p>
        We helped companies from pre-seed to houndreds of employees & from ideation to production!
        <br />
        We can sit at round tables and consult about the algo pipeline architecture, build it from MVP to scale, and
        deploy it to the cloud or on edge devices.
        <br />
        As freelancer we know that some companies would like a full time employees, so we can help recruit them while
        advencing the product in the meantime
      </p>
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
        <DoBlock title="Computer Vision" svg_path="/img/what_we_do_icons/eye.svg" alt="eye icon" text_div={cv_div()} />
        <DoBlock title="3D & SLAM" svg_path="/img/what_we_do_icons/ar.svg" alt="3D icon" text_div={slam_div()} />
        <DoBlock
          title="Data Science"
          svg_path="/img/what_we_do_icons/data.svg"
          alt="data science icon"
          text_div={ds_div()}
        />
        <DoBlock
          title="Idea to Production"
          svg_path="/img/what_we_do_icons/cloud_chip.svg"
          alt="cloud and chip icon"
          text_div={prod_div()}
        />
      </div>
    </section>
  );
}
