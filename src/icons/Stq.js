import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgStq = props => (
  <Svg width={40} height={40} viewBox="0 0 32 32" {...props}>
    <G fill="none">
      <Circle cx={16} cy={16} r={16} fill="#2DC4E7" />
      <Path
        d="M5.155 9.036c1.071 0 2.178-.072 3.25.024.476.535.583 1.285.952 1.904 4.81.024 9.643 0 14.453 0 .357.024.797.036.976.393.214.393.06.857-.143 1.214-.976 1.655-1.905 3.334-2.857 5-.357.596-.596 1.262-1.131 1.727-.44.369-1.048.392-1.607.392H12.38c-.357 0-.738-.035-.952-.321-.69-.774-1.06-1.762-1.512-2.667a246.634 246.634 0 01-2.298-4.726c-.155-.357-.345-.678-.524-1.012-.63 0-1.262 0-1.88-.024-.12-.63-.12-1.273-.06-1.904zm7.512 11.94a3.428 3.428 0 011.476-.024c.547.12 1.024.536 1.155 1.084.142.63.142 1.31-.108 1.916-.238.548-.833.81-1.392.858-.643.047-1.381 0-1.858-.477-.511-.571-.511-1.404-.404-2.119.071-.595.547-1.107 1.13-1.238zm5.952 0c.595-.13 1.238-.119 1.81.095.547.227.833.822.88 1.381.072.655 0 1.405-.476 1.905-.44.417-1.083.476-1.666.464-.572-.023-1.19-.238-1.488-.773a2.817 2.817 0 01-.215-1.87c.12-.583.572-1.07 1.155-1.202z"
        fill="#FFF"
      />
    </G>
  </Svg>
);

export default SvgStq;
