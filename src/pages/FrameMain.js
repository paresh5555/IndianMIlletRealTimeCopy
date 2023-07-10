import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Stack, Select } from "@chakra-ui/react";
import "./FrameMain.css";

const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Bihar",
  "Chhattisgarh",
  "Gujarat",
  "Himachal Pradesh",
  "Jharkhand",
  "Jammu & Kashmir",
  "Kerala",
  "Karnataka",
  "Maharashtra",
  "Madhya Pradesh",
  "Meghalaya",
  "NER",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Tamil Nadu",
  "Telangana",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal"
];


const FrameMain = () => {
  const navigate = useNavigate();
  const [selectedState, setSelectedState] = useState("");

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  const handleSubmit = (event) => {
    navigate(`/state/${encodeURIComponent(selectedState)}`);
  };

  return (
    <div className="frame-main">
      <div className="main-page">
        <img className="background-icon" alt="" src="/background@2x.png" />
        <h1 className="title">Indian Millet Information</h1>
        <h2 className="india">Indian State Data:</h2>
        <h2 className="export">Indian Export Data:</h2>
        <div className="buttons">
          <Stack className="select" w="688px">
            <Select
              variant="default"
              placeholder="Select the state"
              value={selectedState}
              onChange={handleStateChange}
            >
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </Select>
          </Stack>
          <button className="submit" onClick={handleSubmit}>
            <img className="submit-child" alt="" src="/rectangle-2@2x.png" />
            <span className="submit1">Submit</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrameMain;