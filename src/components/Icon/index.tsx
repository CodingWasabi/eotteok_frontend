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
  opacity?: number;
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

const Icon: React.FC<IIconProps> = ({ width, height, icon, rotate = 0, color, opacity, ...props }) => {
  const IconComponent = icons[icon];

  return (
    <StyledIconWrapper {...props} rotate={rotate} width={width || 24} height={height || 24}>
      <IconComponent
        role="presentation"
        aria-hidden="true"
        focusable="false"
        style={{
          fill: 'currentColor',
        }}
        width="100%"
        height="100%"
        opacity={opacity ?? 1}
        color={color}
      />
    </StyledIconWrapper>
  );
};

export default Icon;
