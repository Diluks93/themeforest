import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.gaps[2]}px;
  align-items: flex-start;
  width: 540px;
`;

export const Title = styled.h3`
  font-size: 38px;
  line-height: 56px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.black};
  width: 540px;
  font-weight: 800;
`;

export const Description = styled.p`
  position: relative;

  font-family: 'Open Sans';
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;

  color: ${({ theme }) => theme.colors.grey};
`;
