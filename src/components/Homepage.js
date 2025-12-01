import React from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';
import {useEffect, useState} from 'react';

export default function Homepage() {
  const navigate = useNavigate();
  const [name,setName] = useState('');
  useEffect(() => {
    const storedName = localStorage.getItem('name');
    setName(storedName);}, 
    []);

  return (
    <div className="gradient-bg">
      <div className="home-tittle">
        <h1>Super Stressed App</h1>
        <h2>Welcome,{name}</h2>
        <p>A safe space to share your thoughts and feelings.</p>
        
          <button onClick={() => navigate("/diary")}>
            Digital Diary
            <span className="button-subtext">Write your thoughts and feelings here.</span>
          </button>
            
          <button onClick={() => navigate("/mood")}>
            Mood Tracker
            <span className="button-subtext">Track your emotional wellbeing.</span>
          </button>

          <button onClick={() => navigate("/pet")}>
            Pet Adoption
            <span className="button-subtext">Care for your visual companion.</span>
          </button>
      </div>
    </div>
  );
}
