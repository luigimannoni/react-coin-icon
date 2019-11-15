import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgEdo = props => (
  <Svg height={40} width={40} viewBox="0 0 32 32" {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} fill="#242424" r={16} />
      <Path
        d="M13.06 23.874l2.683-2.697 2.694 2.697-1.719 1.722a1.377 1.377 0 01-1.95 0zm6.95-9.242l-2.692-2.697 2.693-2.697 2.692 2.697zm-.669 8.363l-2.693-2.697 7.23-7.242 1.718 1.721c.539.54.539 1.413 0 1.953zm-7.403-.278L9.246 20.02l7.218-7.23 2.692 2.697zm-3.822-3.8l-1.719-1.722a1.382 1.382 0 01.013-1.952l1.718-1.722 2.693 2.698zM18.883 8.129l-7.23 7.238L8.96 12.67l6.255-6.266a1.377 1.377 0 011.95 0z"
        fill="#fff"
        fillRule="nonzero"
      />
    </G>
  </Svg>
);

export default SvgEdo;
