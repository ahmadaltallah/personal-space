/** @jsx jsx */
import jsx from '../jsx';
import React from 'react';
import ColorModeButton from '../components/ColorModeButton';
import { Svg, Path } from '../elements';

function ColorModeApplier({ ...props }) {
  return (
    <ColorModeButton
      onClick={props.onClick}
      colorMode={props.mode}
      role="button"
      aria-label="Color Mode"
    >
      <Svg viewBox="0 0 32 32" display="block" width="24" height="24">
        <circle
          cx="16"
          cy="16"
          r="14"
          fill="none"
          stroke="currentcolor"
          strokeWidth="4"
        />
        <Path
          d={`
            M 16 0
            A 16 16 0 0 0 16 32
            z
            `}
        />
      </Svg>
    </ColorModeButton>
  );
}

export default ColorModeApplier;
