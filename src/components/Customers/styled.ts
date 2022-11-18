import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ $filter?: boolean }>`
  ${({ $filter }) =>
    $filter
      ? css`
          filter: brightness(0.5);
        `
      : css``}
`;
