import React, { useState, useEffect } from 'react';
import { characterList } from './data';
import {MainGame} from "./mainGame";

export default function MainComponent() {


  return (
    <div id='main-componet'>
      <MainGame />
    </div>
  )
}