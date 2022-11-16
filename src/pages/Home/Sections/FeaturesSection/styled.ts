import styled from 'styled-components';

import { Container, Description, BlockTitle } from 'styles';
import { ButtonStyled } from 'components/Button/styled';
import ensomeTeam from 'static/images/team.webp';

export const ContainerStyled = styled(Container)`
  column-gap: ${({ theme }) => theme.gaps[8]}px;
  padding: ${({ theme }) => theme.sizes.container.paddings[2]}px 0;
  flex-direction: row;
  align-items: flex-start;
  flex: 1;
`;

export const DescriptionStyled = styled(Description)`
  margin-top: 7px;
  width: ${({ theme }) => theme.sizes.container.width[1]}px;
`;

export const SubTitle = styled.h2`
  font-size: ${({ theme }) => theme.fonts.sizes[9]}px;
  line-height: ${({ theme }) => theme.fonts.heights[7]}px;
  letter-spacing: ${({ theme }) => theme.fonts.spacings[1]}em;
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fonts.weights[4]};
  flex: 1;
`;

export const BlockTitleStyled = styled(BlockTitle)`
  width: ${({ theme }) => theme.sizes.container.width[1]}px;
`;

export const Button = styled(ButtonStyled)`
  width: ${({ theme }) => theme.sizes.button.width[4]}px;
  height: ${({ theme }) => theme.sizes.button.height[2]}px;
  font-size: ${({ theme }) => theme.fonts.sizes[2]}px;
`;

export const Background = styled.div`
  background-image: url(${ensomeTeam});
  background-repeat: no-repeat;
  height: ${({ theme }) => theme.sizes.container.height[0]}px;
  flex: 1;
  background-position: right;
  background-size: cover;
`;
