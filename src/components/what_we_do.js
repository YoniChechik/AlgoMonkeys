import React from "react";
import styles from "./what_we_do.module.css";
import Title, { PinkPart } from "./title";
import DataIcon from "@site/static/img/what_we_do_icons/data.svg";
import ARIcon from "@site/static/img/what_we_do_icons/ar.svg";
import CloudIcon from "@site/static/img/what_we_do_icons/cloud_chip.svg";
import EyeIcon from "@site/static/img/what_we_do_icons/eye.svg";

const DoBlock = ({ title, svg_obj, text_div }) => {
  return (
    <div className={styles.flex_block}>
      <div className={styles.title_and_icon}>
        {svg_obj}
        <h2>{title}</h2>
      </div>
      {text_div}
    </div>
  );
};

const slam_div = () => {
  return (
    <div className={styles.info}>
      <p>Algorithmic work on all kind of 3D and SLAM problems:</p>
      <ul>
        <li>3D reconstruction</li>
        <li>Measurements</li>
        <li>Localization</li>
        <li>Mapping</li>
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
    <div className={styles.info}>
      <p>Specializing in neural networks as well as classic computer vision:</p>
      <ul>
        <li>Classification</li>
        <li>Object detection & tracking</li>
        <li>Segmentation</li>
        <li>Face recognition</li>
        <li>Pose estimation</li>
        <li>Feature extraction & matching</li>
        <li>OCR (optical charater recognition)</li>
      </ul>
    </div>
  );
};

const ds_div = () => {
  return (
    <div className={styles.info}>
      <p>Extracting insights from structured data using machine learning and math:</p>
      <ul>
        <li>Classification</li>
        <li>Regression</li>
        <li>Unsupervised learning (e.g. clustering)</li>
        <li>Time series forecasting</li>
        {/* <li>Reinforcement learning</li> */}
        <li>Decision trees</li>
      </ul>
    </div>
  );
};

const prod_div = () => {
  return (
    <div className={styles.info}>
      <p>
        {`We helped companies from pre-seed to houndreds of employees & from ideation to production!

        We can sit at round tables and consult about the algo pipeline architecture, build it from MVP to scale, and deploy it to the cloud or on edge devices.

        As freelancer we know that some companies would like a full time employees, so we can help recruit them while advencing the product in the meantime.`}
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
        <DoBlock
          title="Computer Vision"
          svg_obj={<EyeIcon title="Eye icon" className={styles.icon} />}
          text_div={cv_div()}
        />
        <DoBlock title="3D & SLAM" svg_obj={<ARIcon title="3D icon" className={styles.icon} />} text_div={slam_div()} />
        <DoBlock
          title="Data Science"
          svg_obj={<DataIcon title="Data science icon" className={styles.icon} />}
          text_div={ds_div()}
        />
        <DoBlock
          title="Idea to Production"
          svg_obj={<CloudIcon title="Cloud with chip icon" className={styles.icon} />}
          text_div={prod_div()}
        />
      </div>
    </section>
  );
}
