import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgWtc = props => (
  <Svg width={40} height={40} viewBox="0 0 32 32" {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} r={16} fill="#8200FF" fillRule="nonzero" />
      <Path
        fill="#FFF"
        d="M18.414 13.166l-.68.167c-.614.15-1.044.69-1.044 1.31v4.538l-2.247.55a.69.69 0 01-.836-.492.662.662 0 01-.02-.164V11.52c0-.31.215-.58.522-.656l3.448-.844a.69.69 0 01.836.492c.014.053.02.108.02.163v2.491zm-7.586-.042l-.852.209c-.614.15-1.045.69-1.045 1.31v4.58l-2.074.508a.69.69 0 01-.836-.492.662.662 0 01-.021-.164V11.52c0-.31.215-.58.522-.656l3.449-.844a.69.69 0 01.836.492c.014.053.02.108.02.163v2.45zm10.867-2.239l3.448-.844a.69.69 0 01.836.491.653.653 0 01.021.164v7.556c0 .31-.215.58-.522.655l-3.449.844a.69.69 0 01-.836-.491.662.662 0 01-.02-.164V11.54c0-.31.215-.58.522-.655z"
      />
      <Path
        fill="#FFF"
        d="M12.897 13.314v5.761c0 .11.013.22.04.328a1.38 1.38 0 001.511 1.013v.939c0 .31-.215.58-.522.655l-3.448.844a.69.69 0 01-.837-.491.662.662 0 01-.02-.164v-7.556c0-.31.215-.58.522-.655l2.754-.674zm7.586.042v5.74c0 .11.014.22.04.328.186.723.935 1.163 1.674.982l.01-.002v.95a.68.68 0 01-.522.656l-3.449.844a.69.69 0 01-.836-.491.662.662 0 01-.02-.164v-7.556c0-.31.215-.58.522-.655l2.58-.632z"
        opacity={0.504}
      />
    </G>
  </Svg>
);

export default SvgWtc;
