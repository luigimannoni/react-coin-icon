import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgAudr = props => (
  <Svg width={40} height={40} viewBox="0 0 32 32" {...props}>
    <G fill="none">
      <Circle cx={16} cy={16} r={16} fill="#34318A" />
      <Path
        d="M10.854 13.264l3.61 1.92 1.92-.96-4.589-2.486V7.36l8.823 4.58 1.92-.96-11.3-5.924A.845.845 0 0010 5.805v6.067c.003.587.332 1.124.854 1.392zm13.757-1.018a.845.845 0 00-.96-.153l-12.797 6.643c-.525.27-.855.811-.854 1.402v6.057a.845.845 0 001.238.749l12.768-6.624c.533-.276.864-.83.855-1.43v-6.048a.835.835 0 00-.25-.596zm-1.536 6.538l-11.28 5.856v-4.378l11.28-5.856v4.378z"
        fill="#FFF"
      />
    </G>
  </Svg>
);

export default SvgAudr;
