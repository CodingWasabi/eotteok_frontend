import React from 'react';
import styled from 'styled-components';

import * as icons from '@/components/Icon/icons';

type IconOption = keyof typeof icons;

interface IIconProps {
  icon: IconOption;
  color?: string;
  width?: number;
  height?: number;
  rotate?: number;
}

const StyledIconWrapper = styled.div<{ width: number; height: number; rotate: number }>`
  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;

  ${(props) =>
    props.rotate && {
      transform: `rotate(${props.rotate}deg)`,
    }}
`;

const Icon: React.FC<IIconProps> = ({ width, height, icon, rotate = 0, ...props }) => {
  const IconComponent = icons[icon];

  return (
    <StyledIconWrapper {...props} rotate={rotate} width={width || 50} height={height || 50} color={props.color}>
      <IconComponent
        role="presentation"
        aria-hidden="true"
        focusable="false"
        style={{
          fill: 'currentColor',
        }}
        width="100%"
        height="100%"
      />
    </StyledIconWrapper>
  );
};

export default Icon;
