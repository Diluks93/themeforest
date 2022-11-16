import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{
  $align?: boolean;
}>`
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.gaps[8]}px;
  flex: 1;

  ${({ $align }) =>
    $align
      ? css`
          align-items: flex-start;
        `
      : css`
          align-items: baseline;
        `};
`;
