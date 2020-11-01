import React from "react";
import Svg, { Path, G, Defs, LinearGradient, Stop } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const SvgBased = props => (
  <Svg width={40} height={40} fill="none" viewBox="0 0 40 40" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
      fill="url(#based_svg__paint0_linear)"
    />
    <G filter="url(#based_svg__filter0_d)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 35c8.837 0 16-6.94 16-15.5C36 10.94 28.837 4 20 4S4 10.94 4 19.5C4 28.06 11.163 35 20 35z"
        fill="url(#based_svg__paint1_linear)"
      />
    </G>
    <G filter="url(#based_svg__filter1_dddd)">
      <Path
        d="M27.562 20.314c1.142.87 2.08 2.563.7 4.774-1.75 2.808-5.507 4.427-10.25 3.048l-6.458-1.877c-.632.085-3.7.453-5.726-.136-1.555-.452-2.496-1.467-1.256-3.604 3.05-5.256 11.381-8.773 15.89-10.533.402-.157.811-.3 1.224-.437l.21-.069a.789.789 0 00-.145.046c-.704.18-3.436.566-5.424 1.278l2.84-4.554 7.441 2.163c2.625-.35 5.111-.275 6.952.26 3.272.951 2.325 2.816 2.275 2.914-.611 2.074-3.123 3.678-3.255 3.763l.013-.222c-.046.081-.088.163-.138.244a6.244 6.244 0 01-4.893 2.942zM6.798 25.519c.93.27 2.163.274 3.01.233l-1.316-.382 5.516-8.848C11.693 17.828 10.333 19 9.644 19.49c-5.29 4.02-4.625 5.511-2.846 6.03zm26.937-13.39c-1.007-.292-2.28-.352-3.13-.354 2.532 1.307 3.02 3.212 2.143 5.055 3.717-2.937 2.77-4.182.987-4.7zM18.846 24.399c1.831.532 3.056.042 3.82-1.185.671-1.075.41-2.049-1.36-2.564l-2.952-.858L16 23.57l2.847.828zm3.619-11.2l-2.01 3.223 3.11.904c1.533.446 2.598-.084 3.176-1.013.661-1.06.128-1.833-1.208-2.221l-3.068-.892z"
        fill="#00ADD5"
      />
    </G>
    <Defs>
      <LinearGradient
        id="based_svg__paint0_linear"
        x1={20.195}
        y1={0.422}
        x2={19.806}
        y2={39.451}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F9B9BB" />
        <Stop offset={1} stopColor="#FABBA8" />
      </LinearGradient>
      <LinearGradient
        id="based_svg__paint1_linear"
        x1={20.156}
        y1={4.327}
        x2={19.864}
        y2={34.574}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#EDBCB9" />
        <Stop offset={1} stopColor="#9CC6C9" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default SvgBased;
