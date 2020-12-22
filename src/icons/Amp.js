import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgAmp = props => (
  <Svg width={40} height={40} fill="none" viewBox="0 0 40 40" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
      fill="#D9327C"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.224 10.598c-.158.118-.337.338-.48.766-.133.401-.837 2.447-1.716 4.997h5.945c-.88-2.55-1.583-4.596-1.717-4.997-.143-.428-.321-.648-.48-.766-.152-.115-.384-.21-.776-.21s-.624.095-.776.21zm-8.78 5.763H14.5c1.002-2.904 1.835-5.322 1.978-5.753.256-.766.674-1.442 1.313-1.921C18.434 8.204 19.198 8 20 8c.802 0 1.565.204 2.209.687.638.479 1.057 1.155 1.312 1.921.144.43.976 2.85 1.978 5.753h4.056a1.194 1.194 0 010 2.389H10.444a1.194 1.194 0 010-2.389zm0 4.778a1.194 1.194 0 100 2.389h1.582l-1.516 4.387a1.195 1.195 0 102.258.78l.877-2.538.909-2.63h10.893l.908 2.63.877 2.539a1.195 1.195 0 102.258-.78l-1.516-4.388h1.582a1.194 1.194 0 000-2.39H10.444z"
      fill="#fff"
    />
  </Svg>
);

export default SvgAmp;
