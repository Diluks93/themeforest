import styled, { css } from 'styled-components';

const styles = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  ${styles}
  width: 540px;
  row-gap: ${({ theme }) => theme.gaps[9]}px;
`;

export const Block = styled.div`
  ${styles}
  row-gap: ${({ theme }) => theme.gaps[7]}px;

  a {
    font-weight: ${({ theme }) => theme.fonts.weights[3]};
  }
`;
