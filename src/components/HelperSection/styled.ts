import styled from 'styled-components';
import { Container, Description } from 'styles';

import { ButtonStyled } from 'components/Button/styled';
import { SectionStyled } from 'components/Section/styled';

export const Section = styled(SectionStyled)``;

export const ContainerStyled = styled(Container)`
  width: ${({ theme }) => theme.sizes.container.width[1]}px;
  row-gap: ${({ theme }) => theme.gaps[8]}px;
  padding: ${({ theme }) => theme.sizes.container.paddings[3]}px 0;
`;

export const DescriptionStyled = styled(Description)`
  font-size: ${({ theme }) => theme.fonts.sizes[2]}px;
  line-height: ${({ theme }) => theme.fonts.heights[1]}px;
  text-align: center;
`;

export const Button = styled(ButtonStyled)`
  width: ${({ theme }) => theme.sizes.button.width[5]}px;
  height: ${({ theme }) => theme.sizes.button.height[0]}px;
`;
