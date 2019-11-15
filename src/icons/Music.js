import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgMusic = props => (
  <Svg width={40} height={40} viewBox="0 0 32 32" {...props}>
    <G fill="none">
      <Circle cx={16} cy={16} r={16} fill="#FFF" />
      <Path
        fill="#FBBF02"
        d="M18.65.226A16 16 0 0016 0C7.16 0 0 7.16 0 16c0 3.394 1.067 6.53 2.86 9.131 1.1-1.616 3.637-2.731 6.578-2.731 2.02 0 3.847.533 5.156 1.39L18.65.226zm8.502 4.315c2.763 6.11.339 9.374.339 9.374-1.875-5.64-7.305-6.464-7.305-6.464s-3.572 19.248-3.572 19.49c0 2.085-2.214 3.847-5.22 4.38A16.01 16.01 0 0016 32c8.84 0 16-7.16 16-16 0-4.493-1.859-8.55-4.848-11.459z"
      />
    </G>
  </Svg>
);

export default SvgMusic;
