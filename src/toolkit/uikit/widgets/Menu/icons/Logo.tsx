import React from 'react'
import styled from "styled-components";
// import Svg from '../../../components/Svg/Svg'
import { SvgProps } from '../../../components/Svg/types'

const DxLogo = styled.div`
  border-radius: 10px;
  padding: 10px 20px;
  box-shadow: 2px 2px 2px #a1a1a1;
`;

interface LogoProps extends SvgProps {
  isDark: boolean
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? '#FFFFFF' : '#000000'
  const bgColor = isDark ? '#000000' : '#FFFFFF'
  return (
    <DxLogo style={{color: textColor, backgroundColor: bgColor}} {...props}>
      Dx
    </DxLogo>
  )
}

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark)
