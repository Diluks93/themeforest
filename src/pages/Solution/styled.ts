import styled, { css } from 'styled-components';

import { Container, Description } from 'styles';
import dataAnalytics from 'static/images/data_analytics.webp';

export const ContainerStyled = styled(Container)<{ $align?: boolean }>`
  flex: 1;
  ${({ $align, theme }) =>
    $align
      ? css`
          align-items: flex-start
          padding: ${theme.sizes.container.paddings[2]}px 0;
        `
      : css`
          align-items: center;
          padding-bottom: ${theme.sizes.container.paddings[2]}px;
        `}
`;

export const Background = styled.div`
  background-image: url(${dataAnalytics});
  background-repeat: no-repeat;
  height: ${({ theme }) => theme.sizes.container.height[0]}px;
  flex: 1;
  background-position: right;
  background-size: cover;
`;

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  row-gap: 30px;

  svg {
    fill: ${({ theme }) => theme.colors.primary};
  }
`;

export const ListItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  row-gap: 16px;
  width: 540px;
`;

export const DescriptionStyled = styled(Description)`
  font-size: 16px;
  width: 540px;
`;

export const SubTitle = styled.h4`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.015em;
  ${({ theme }) => theme.colors.black}
`;
