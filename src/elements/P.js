import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';
import {
  space,
  width,
  display,
  maxWidth,
  fontSize,
  fontWeight,
  fontFamily,
  lineHeight,
  textAlign,
  textStyle,
  color,
  borders,
  borderColor,
  borderRadius,
} from 'styled-system';

const P = styled('p', { shouldForwardProp })(
  space,
  width,
  display,
  maxWidth,
  fontSize,
  fontWeight,
  fontFamily,
  lineHeight,
  textAlign,
  textStyle,
  color,
  borders,
  borderColor,
  borderRadius,
  {
    boxSizing: 'border-box',
  }
);

P.defaultProps = {
  maxWidth: '90em', // Sets text to maximum ~80 characters wide
  lineHeight: 1.8,
};

export default P;
