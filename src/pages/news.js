import React from 'react';
import style from '../styles/test.module.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Img = 'https://gsacademy.jp/uploads/1-4.png'
const Img2 = 'https://gsacademy.jp/uploads/IMG_7963-1536x1024.jpg'
const Img3 = 'https://gsacademy.jp/uploads/2-17-1920x1282.jpg'

export default function SimpleSlider() {
  var settings = {
    autoplay: true,
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div>
    <h1 className={style.h1}>INTERVIEW</h1>
    <h2 className={style.h2}>起業家のインタビュー</h2>
    <Slider {...settings} className={style.sl}>
        <div>
          <img src={Img} alt="photo"/>
          <div>
            <div className={style.aritcle}>
              <h2 className={style.title}>INTERVIEW</h2>
              <h3 className={style.date}>2023.08.02</h3>
            </div>
            <p className={style.p}>【LABコース卒業生インタビュー】「楽しくて、美しい海を拡げる」—自分のやりたいことを押し通せる粘り強さを持って—</p>
          </div>
        </div>
        <div>
          <img src={Img2} alt="photo"/>
          <div>
            <div className={style.aritcle}>
              <h2 className={style.title}>INTERVIEW</h2>
              <h3 className={style.date}>2023.08.02</h3>
            </div>
            <p className={style.p}>【LABコース卒業生インタビュー】「楽しくて、美しい海を拡げる」—自分のやりたいことを押し通せる粘り強さを持って—</p>
          </div>
        </div>
        <div>
          <img src={Img3} alt="photo"/>
          <div>
            <div className={style.aritcle}>
              <h2 className={style.title}>INTERVIEW</h2>
              <h3 className={style.date}>2023.08.02</h3>
            </div>
            <p className={style.p}>【LABコース卒業生インタビュー】「楽しくて、美しい海を拡げる」—自分のやりたいことを押し通せる粘り強さを持って—</p>
          </div>
        </div>
        <div>
          <img src={Img} alt="photo"/>
          <div>
            <div className={style.aritcle}>
              <h2 className={style.title}>INTERVIEW</h2>
              <h3 className={style.date}>2023.08.02</h3>
            </div>
            <p className={style.p}>【LABコース卒業生インタビュー】「楽しくて、美しい海を拡げる」—自分のやりたいことを押し通せる粘り強さを持って—</p>
          </div>
        </div>
        <div>
          <img src={Img2} alt="photo"/>
          <div>
            <div className={style.aritcle}>
              <h2 className={style.title}>INTERVIEW</h2>
              <h3 className={style.date}>2023.08.02</h3>
            </div>
            <p className={style.p}>【LABコース卒業生インタビュー】「楽しくて、美しい海を拡げる」—自分のやりたいことを押し通せる粘り強さを持って—</p>
          </div>
        </div>
        <div>
          <img src={Img3} alt="photo"/>
          <div>
            <div className={style.aritcle}>
              <h2 className={style.title}>INTERVIEW</h2>
              <h3 className={style.date}>2023.08.02</h3>
            </div>
            <p className={style.p}>【LABコース卒業生インタビュー】「楽しくて、美しい海を拡げる」—自分のやりたいことを押し通せる粘り強さを持って—</p>
          </div>
        </div>
    </Slider>
    <div>
      <button className={style.btn}>記事一覧を見る</button>
    </div>
    </div>
  );
}