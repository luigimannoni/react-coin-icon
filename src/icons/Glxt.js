import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgGlxt = props => (
  <Svg width={40} height={40} viewBox="0 0 32 32" {...props}>
    <G fill="none">
      <Circle cx={16} cy={16} r={16} fill="#005396" />
      <Path
        d="M12.328 4.598a11.955 11.955 0 013.21-.567c1.497-.068 3.002.175 4.417.658A12.033 12.033 0 0125.7 8.984c.33.44.608.913.876 1.393.311.608.592 1.234.804 1.883.28.891.49 1.814.555 2.749.034.202.012.408.04.61.01.253.006.506 0 .761-.028.203-.006.409-.04.611-.06.842-.234 1.674-.474 2.484a11.86 11.86 0 01-.78 1.942 12.032 12.032 0 01-5.41 5.336 10.98 10.98 0 01-2.033.773c-1.175.337-2.4.48-3.618.446-.203-.028-.412-.006-.611-.04-.913-.063-1.811-.262-2.684-.534A12.033 12.033 0 014.708 20c-.39-1.135-.64-2.322-.67-3.525-.041-.577.003-1.157.05-1.733.087-.851.28-1.693.542-2.506A12.04 12.04 0 018.984 6.3c.44-.33.913-.61 1.393-.876a12.212 12.212 0 011.951-.826zm2.31 4.33v2.802c-.006.05.04.078.065.112.43.452.864.9 1.294 1.353a973.586 973.586 0 010-4.267c-.452 0-.907-.003-1.36 0zm-5.91 1.45c.103.068.178.167.265.252.926.935 1.855 1.867 2.777 2.808.845.854 1.693 1.705 2.534 2.559-1.019 1.044-2.057 2.07-3.073 3.114-.813.82-1.627 1.64-2.437 2.459a1.195 1.195 0 01-.066.05c1.197 0 2.397.003 3.597-.006 1.225-1.282 2.456-2.56 3.678-3.844 1.225 1.281 2.453 2.562 3.678 3.844 1.197.009 2.394.003 3.59.006-.183-.147-.327-.33-.498-.49-.857-.866-1.72-1.733-2.575-2.602-.829-.845-1.673-1.677-2.496-2.528.2-.2.386-.408.592-.605 1.568-1.58 3.13-3.166 4.697-4.747.094-.09.172-.196.28-.27-1.2 0-2.396-.004-3.593.002-1.225 1.281-2.453 2.56-3.678 3.84-1.222-1.284-2.453-2.562-3.678-3.84-1.197-.003-2.397-.003-3.594-.003zm7.278 8.415c0 1.427.003 2.852-.003 4.28.455-.004.91 0 1.362 0v-2.806a.092.092 0 00-.031-.081c-.23-.25-.474-.483-.701-.732-.206-.225-.427-.43-.627-.661z"
        fill="#FFF"
      />
    </G>
  </Svg>
);

export default SvgGlxt;
