import React from "react";
import { useParams } from "react-router-dom";
import "./frame-component.css";

const FrameComponent = () => {
  const { stateName } = useParams();

  const handleSectionClick = (wkname, ans) => {
    let url;
    if (ans == 1) {
      url = `https://indianmilletinformation.vercel.app/?worksheetName=${encodeURIComponent(wkname.toString())}`;
    } else {
      url = `https://indianmilletinformation.vercel.app/?worksheetName=${encodeURIComponent(wkname.toString())}&extras=${encodeURIComponent(stateName.toString())}`;
    }
    window.location.href = url;
  };
  

  return (
    <div className="state-page-parent">
      <div className="state-page">
        <img className="background-icon" alt="" src="/background@2x.png" />
        <h1 className="title">Indian Millet Information</h1>
        <div className="state">
          <img className="state-child" alt="" src="/line-3.svg" />
          <h2 className="state-name">{stateName}</h2>
        </div>
        <div className="selections">
          <div className="farmer-producer-organization">
            <button className="selection-button" onClick={()=> handleSectionClick("Farmer Producer Organisation",0)}>
              <img
                className="farmer-producer-organization-child"
                alt=""
                src="/rectangle-20@2x.png"
              />
              <span className="farmer-producer-organization1">
                Farmer Producer Organization
              </span>
            </button>
          </div>
          <div className="entrepreneurs-and-startups">
            <button className="selection-button" onClick={()=> handleSectionClick("Entrepreneurs",0)}>
              <img
                className="farmer-producer-organization-child"
                alt=""
                src="/rectangle-21@2x.png"
              />
              <span className="farmer-producer-organization1">
                Entrepreneurs and Startups
              </span>
            </button>
          </div>
          <div className="famer-harvest-price">
            <button className="selection-button" onClick={()=> handleSectionClick("Farmer Harvest Price",0)}>
              <img
                className="farmer-producer-organization-child"
                alt=""
                src="/rectangle-22@2x.png"
              />
              <span className="farmer-producer-organization1">
                Farmer Harvest Price
              </span>
            </button>
          </div>
          <div className="cost-of-cultivation">
            <button className="selection-button" onClick={()=> handleSectionClick("Cost of Cultivation",0)}>
              <img
                className="farmer-producer-organization-child"
                alt=""
                src="/rectangle-23@2x.png"
              />
              <span className="farmer-producer-organization1">
                Cost of Cultivation
              </span>
            </button>
          </div>
          <div className="district-wise-data">
            <button className="selection-button" onClick={()=> handleSectionClick(stateName,1)}>
              <img
                className="farmer-producer-organization-child"
                alt=""
                src="/rectangle-20@2x.png"
              />
              <span className="farmer-producer-organization1">
                District Wise Data
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
