import React, { useState, useEffect } from 'react';
import { characterList } from './data';
import {MainGame} from "./mainGame";
import Background from './background.jpeg'

export default function MainComponent() {


  return (
    <div id='main-componet'>
      <MainGame />
      <img id='background' src={Background} alt="Eva Title" />
    </div>
  )
}