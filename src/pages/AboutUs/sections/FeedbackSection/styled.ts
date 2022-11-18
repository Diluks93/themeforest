import styled, { css } from 'styled-components';

const styles = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: ${({ theme }) => theme.gaps[8]}px;
`;

export const Block = styled.div`
  ${styles}
  padding-right: 665px;
`;

export const Wrapper = styled.div`
  ${styles}
`;
