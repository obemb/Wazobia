import React from "react";

import "../styles/EmbedSelector.css";
import { selectorTypes } from "../utils/types";
import { Stack } from "@mui/material";
import {PhotoSizeSelectActual,VideoCameraBackRounded,InterestsRounded} from '@mui/icons-material';

const EmbedSelector = ({ handleSelect }) => {
  const selectors = [
    {
      name: selectorTypes.PICTURE,
      icon: <PhotoSizeSelectActual />,
      details:'jpeg,png'
    },
    {
      name: selectorTypes.VIDEO,
      icon: <VideoCameraBackRounded />,
      details:'JW player, Youtube, Vimeo',
    },
    {
      name: selectorTypes.SOCIAL,
      icon: <InterestsRounded  />,
      details: 'Instagram, Twitter, TikTok, Snapchat, Facebook'
    },
  ];

  return (
    <div className="embed-selector">
      <p style={{padding:'2px 10px'}}>EMBEDS</p>
      {selectors.map((selector) => (
        <div key={selector.name}>
          <Stack spacing={2} direction={'row'} className="embed-selector-btn"  onClick={() => handleSelect(selector.name)}>
            {selector.icon}
            <div>
              <div>{selector.name}</div>
              <div style={{color:'#343E37',fontSize:'10px'}}>{selector.details}</div>
            </div>
          </Stack>
         
        </div>
      ))}
    </div>
  );
};

export default EmbedSelector;
