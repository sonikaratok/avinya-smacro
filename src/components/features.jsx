import React from "react";
// import PsychologyIcon from '@mui/icons-material/Psychology';
// import BrushIcon from '@mui/icons-material/Brush';
// import PaletteIcon from '@mui/icons-material/Palette';
// import QueryStatsIcon from '@mui/icons-material/QueryStats';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import MicrowaveIcon from '@mui/icons-material/Microwave';
import ControlCameraIcon from '@mui/icons-material/ControlCamera';
import HighQualityIcon from '@mui/icons-material/HighQuality';

export const Features = (props) => {
  const featureStyle = {
    paddingTop: '10rem', 
    paddingBottom: '3rem',
    margin: '5rem',
    borderRadius: '1rem',
  };

  const icons = [<EnergySavingsLeafIcon fontSize="large" sx={{fontSize: '8rem'}} />, <MicrowaveIcon fontSize="large" sx={{fontSize: '8rem'}} />, <ControlCameraIcon fontSize="large" sx={{fontSize: '8rem'}} />, <HighQualityIcon fontSize="large" sx={{fontSize: '8rem'}} />]
  return (
    <div id="features" className="text-center" style={featureStyle}>
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Features</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                  {" "}
                  {icons[i]}
                  {/* <QueryStatsIcon fontSize="large" sx={{fontSize: '8rem'}} /> */}
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
