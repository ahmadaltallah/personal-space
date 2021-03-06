/** @jsx jsx */
import jsx from '../jsx';
import React from 'react';
import Bio from '../pages/archive/Bio';
import { H1 } from '../elements';
import BornRich from '../pages/archive/BornRich';
import useColorMode from '../hooks/useColorMode';
import MidnightStory from '../pages/archive/MidnightStory';
import Society from '../pages/archive/Society';
import EVSP from '../pages/archive/EVSP';
import Para from '../pages/archive/Para';
import DesertOctopus from '../pages/archive/DesertOctopus';
import ZerodBQarunLake from '../pages/archive/ZerodBQarunLake';
import SoyCuba from '../pages/archive/SoyCuba';
import FlipYourEye from '../pages/archive/FlipYourEye';

export function Archive({ ...props }) {
  const { textColor } = useColorMode();

  return (
    <>
      <H1 fontWeight={600} fontSize={4} color={textColor}>
        {' '}
        Archive{' '}
      </H1>
      <FlipYourEye />
      <SoyCuba />
      <ZerodBQarunLake />
      <DesertOctopus />
      <Para />
      <EVSP />
      <MidnightStory />
      <Society />
      <BornRich />
      <Bio />
    </>
  );
}
