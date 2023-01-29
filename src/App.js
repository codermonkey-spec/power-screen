import React from 'react';
import {useScalePage} from './hooks'
import PowerView from './pages/power-view'

const screenOption = {
  targetX:1920,
  targetY:1080,
  targetRatio: 16 / 9
}

export default function App() {
  useScalePage(screenOption);

  return <PowerView />
}

