import styled, { css } from 'styled-components';

import { Container, Description } from 'styles';

export const ContainerStyled = styled(Container)<{ $padding?: boolean }>`
  ${({ $padding }) =>
    $padding
      ? css`
          padding-top: 20px;
        `
      : css`
          padding-top: 70px;
          padding-bottom: 120px;
        `}
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fonts.sizes[7]}px;
  line-height: 60px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.white};
  flex: 1;
  font-weight: 800;
`;

export const DescriptionStyled = styled(Description)`
  font-size: ${({ theme }) => theme.fonts.sizes[1]}px;
  color: ${({ theme }) => theme.colors.white};
  line-height: 24px;
`;

export const Wrapper = styled.div`
  flex: 1;
  padding-top: 10px;
  row-gap: 10px;
  display: flex;
  flex-direction: column;
  height: 158px;
  justify-content: space-between;
`;
