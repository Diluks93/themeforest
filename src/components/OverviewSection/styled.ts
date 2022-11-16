import styled, { css } from 'styled-components';

import { Description, Container } from 'styles';
import { SectionStyled } from 'components/Section/styled';

export const Section = styled(SectionStyled)`
  row-gap: ${({ theme }) => theme.gaps[11]}px;
  padding: ${({ theme }) => theme.sizes.container.paddings[2]}px 0
    ${({ theme }) => theme.sizes.container.paddings[1]}px;
`;

export const ContainerStyled = styled(Container)`
  row-gap: ${({ theme }) => theme.gaps[11]}px;
`;

export const DescriptionStyled = styled(Description)`
  font-size: ${({ theme }) => theme.fonts.sizes[3]}px;
  line-height: ${({ theme }) => theme.fonts.heights[3]}px;
  flex: 1;
`;

export const Wrapper = styled.div<{
  $row?: boolean;
}>`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.gaps[8]}px;
  flex: 1;

  ${({ $row }) =>
    $row
      ? css`
          align-items: center;
          justify-content: space-between;
        `
      : css``};
`;
