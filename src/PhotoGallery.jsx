import React, { useState } from 'react';
import FullScreenViewer from './FullScreenViewer';
import './Photogallery.css'

const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

