import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 80px;
  line-height: 88px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.black};
  width: 540px;
  font-weight: 800;
`;

export const Mark = styled.mark`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
`;
