import "./Homepage.css";
import React, {useState,useEffect} from 'react';
const Homepage = () => {
 const[banner,setbanner] = useState({})
const [trendingNow, settrendingNow] = useState([]);
const [horror, setHorror] = useState([]);
const [sciFi, setSciFi] = useState([]);
{
  useEffect(() => {
    fetch(
      "https://ott-be-dev.netskill.com/home")
      .then((res) => res.json())
      .then((json) => {
      console.log("json api data---",json)
      setbanner(json.banner)
      setTrendingNow(json.tendingnow)
      sethorror(json.horror)
      setSciFi(json.sciFi)
      })
  })
}


  return (
    <div className="homepage">
      <div className="mask-group-parent">
        <img className="mask-group-icon" alt="" src="/mask-group@2x.png" />
        <div className="group-child" />
        <div className="sign-up-parent">
          <b className="sign-up">Sign up</b>
          <img className="bxbx-search-icon" alt="" src="/bxbxsearch.svg" />
          <img
            className="claritybell-outline-badged-icon"
            alt=""
            src="/claritybelloutlinebadged.svg"
          />
        </div>
        <div className="group-item" />
        <div className="blade-runner-2049-parent">
          <b className="blade-runner-2049">{banner.title}{banner.released}</b>
          <div className="thirty-years-after">
            {banner.synopsis}
          </div>
          <img className="group-inner" alt="" src="/group-1.svg" />
          <div className="rectangle-parent">
            <div className="rectangle-div" />
            <img className="polygon-icon" alt="" src="/polygon-1.svg" />
            <b className="watch-now">Watch Now</b>
          </div>
        </div>
        <div className="group-parent">
          <div className="ri-add-fill-parent">
            <img className="ri-add-fill-icon" alt="" src="/riaddfill.svg" />
            <div className="watchlist">WATCHLIST</div>
          </div>
          <div className="ri-share-fill-parent">
            <img className="ri-share-fill-icon" alt="" src="/risharefill.svg" />
            <div className="watchlist">SHARE</div>
          </div>
        </div>
        <div className="line-div" />
        <div className="trending-now">Trending Now</div>
        <b className="TrendingNow">{banner.TrendingNow}</b>
        <div className="horror">Horror</div>
        <b className="Horror">{banner.horror}</b>
        <div className="sci-fi">Sci- Fi</div>
        <b className="sci-fi">{banner.sciFi}</b>
        <div className="movie-sec-4">
          <div className="movies">
            <img className="fan-img2-icon" alt="" src="/fanimg2@2x.png" />
            <img className="fan-img3-icon" alt="" src="/fanimg3@2x.png" />
            <img className="fan-img4-icon" alt="" src="/fanimg4@2x.png" />
            <img className="fan-img5-1-icon" alt="" src="/fanimg5-1@2x.png" />
            <img className="fan-img5-2-icon" alt="" src="/fanimg5-2@2x.png" />
            <img className="fan-img6-icon" alt="" src="/fanimg6@2x.png" />
            <img className="fan-img7-icon" alt="" src="/fanimg7@2x.png" />
            <img className="fan-img8-icon" alt="" src="/fanimg8@2x.png" />
          </div>
        </div>
        <div className="movies1">
          <img className="fan-img2-icon1" alt="" src="/fanimg21@2x.png" />
          <img className="fan-img3-icon1" alt="" src="/fanimg31@2x.png" />
          <img className="fan-img4-icon1" alt="" src="/fanimg41@2x.png" />
          <img className="fan-img5-1-icon1" alt="" src="/fanimg5-11@2x.png" />
          <img className="fan-img5-2-icon1" alt="" src="/fanimg5-21@2x.png" />
          <img className="fan-img6-icon1" alt="" src="/fanimg61@2x.png" />
          <img className="fan-img7-icon1" alt="" src="/fanimg71@2x.png" />
          <img className="fan-img8-icon1" alt="" src="/fanimg81@2x.png" />
        </div>
        <div className="movie-sec-3">
          <div className="movies2">
            <img className="fan-img2-icon2" alt="" src="/fanimg22@2x.png" />
            <img className="fan-img3-icon2" alt="" src="/fanimg32@2x.png" />
            <img className="fan-img4-icon2" alt="" src="/fanimg42@2x.png" />
            <img className="fan-img5-1-icon2" alt="" src="/fanimg5-12@2x.png" />
            <img className="fan-img5-2-icon2" alt="" src="/fanimg5-22@2x.png" />
            <img className="fan-img6-icon2" alt="" src="/fanimg62@2x.png" />
            <img className="fan-img7-icon2" alt="" src="/fanimg72@2x.png" />
            <img className="fan-img8-icon2" alt="" src="/fanimg82@2x.png" />
          </div>
        </div>
        <div className="group-child1" />
        <b className="connect-us">Connect Us</b>
        <b className="manage">Manage</b>
        <b className="information">Information</b>
        <div className="about">-About</div>
        <div className="help-center">-Help Center</div>
        <div className="career">-Career</div>
        <div className="contact-us">-Contact Us</div>
        <div className="account-parent">
          <div className="account">-Account</div>
          <div className="buy-gift-card">-Buy Gift Card</div>
          <div className="redeem-gift-card">-Redeem Gift Card</div>
          <div className="manage-account">-Manage Account</div>
        </div>
        <div className="privacy-parent">
          <div className="account">-Privacy</div>
          <div className="buy-gift-card">-Cookies</div>
          <div className="redeem-gift-card">-FAQ</div>
          <div className="manage-account">{`-Terms & Condition`}</div>
        </div>
      </div>
      <b className="watchflix">
        <span>Watch</span>
        <span className="flix">Flix</span>
      </b>
      <b className="watchflix1">
        <span>Watch</span>
        <span className="flix">Flix</span>
      </b>
      <div className="homepage-inner">
        <div className="tv-series-parent">
          <div className="tv-series">TV Series</div>
          <div className="documentaries">Documentaries</div>
          <div className="categories">Categories</div>
          <div className="movies-parent">
            <b className="account">Movies</b>
            <div className="group-child2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
