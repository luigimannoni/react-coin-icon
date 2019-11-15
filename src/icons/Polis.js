import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgPolis = props => (
  <Svg width={40} height={40} viewBox="0 0 32 32" {...props}>
    <G fill="none">
      <Circle cx={16} cy={16} r={16} fill="#2C3E50" />
      <Path
        d="M25.636 22.68v-1c0-.198-.133-.33-.335-.33h-.665v-1.004c0-.199-.133-.334-.331-.334h-.666v-7.345h.662c.199 0 .335-.132.335-.334v-1h.665a.322.322 0 00.331-.268c.034-.166-.033-.298-.165-.368l-9.318-4.672a.46.46 0 00-.298 0l-9.652 4.672a.333.333 0 00-.166.364c0 .17.133.272.298.272h1v1c0 .198.133.33.331.33h.666v7.349h-.662c-.2 0-.335.132-.335.33v1.004h-.665c-.2 0-.332.132-.332.331v1.003c-.198 0-.334.133-.334.335s.132.334.331.334h19.305c.198 0 .334-.132.334-.33 0-.2-.132-.339-.33-.339h-.004zM7.993 11.998v-.665h15.974v.665H7.993zm13.643.67v7.344h-1.328v-7.345h1.328zm-3.328 0v7.344h-1.331v-7.345h1.33zm-3.328 0v7.344h-1.328v-7.345h1.328zm-3.328 0v7.344h-1.327v-7.345h1.327zm12.315 8.678H7.997v-.669H23.97v.669h-.003z"
        fill="#FFF"
      />
    </G>
  </Svg>
);

export default SvgPolis;
