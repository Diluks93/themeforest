import styled, { css } from 'styled-components';

import { SectionStyled } from 'components/Section/styled';
import { BlockTitle, Container, Description } from 'styles';

export const Section = styled(SectionStyled)`
  ${({ theme }) =>
    theme.type === 'light'
      ? css`
          border-bottom: 1px solid ${theme.colors.slate};
          background-color: ${theme.colors.secondary};
        `
      : css`
          background-color: ${theme.colors.hoverButton};
        `}
`;

export const ContainerStyled = styled(Container)`
  flex-direction: row;
  column-gap: ${({ theme }) => theme.gaps[12]}px;
  padding: ${({ theme }) => theme.sizes.container.paddings[0]}px 0;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.gaps[7]}px;
  align-items: flex-start;
  flex: 1;
`;

export const BlockTitleStyled = styled(BlockTitle)`
  color: white;
`;

export const DescriptionStyled = styled(Description)`
  color: white;
`;
