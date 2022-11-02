import styled from 'styled-components';

export const Title = styled.h2`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 800;
  font-size: 46px;
  line-height: 60px;

  text-align: center;
  letter-spacing: -0.015em;

  color: ${({ theme }) => theme.colors.black};
`;
