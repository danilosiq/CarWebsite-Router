import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import './Filter.css'

const FIlter = () => {
  const navigate = useNavigate()
  const [brand,setBrand] = useState()
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(brand);
    navigate("/search?brand=" +brand);
  };

  return (
    <div className="ContainerFilter">
      <fieldset>
        <form onSubmit={handleSubmit}>
          <div className="boxFilter">
            <h3>Marca:</h3>
            <label htmlFor="">
              <input type="radio" value="FIAT" onChange={(e) => setBrand(e.target.value)} name="brand" /> FIAT
            </label>
            <label htmlFor="">
              <input type="radio" value="BMW" name="brand" onChange={(e) => setBrand(e.target.value)}/> BMW
            </label>
            <label htmlFor="">
              <input type="radio" value="RENAULT" name="brand" onChange={(e) => setBrand(e.target.value)}/> RENAULT
            </label>
            <label htmlFor="">
              <input type="radio" value="BYD" name="brand" onChange={(e) => setBrand(e.target.value)}/> BYD
            </label>
            <label htmlFor="">
              <input type="radio" value="HONDA" name="brand" onChange={(e) => setBrand(e.target.value)}/> HONDA
            </label>
          </div>
          <input type="submit" className="subFilter"/>
        </form>
      </fieldset>
    </div>
  );
};

export default FIlter;
