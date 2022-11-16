import styled from 'styled-components';

export const SubTitle = styled.h6`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes[2]}px;
  line-height: 24px;

  text-align: center;
  letter-spacing: -0.015em;

  color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.h2`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 800;
  font-size: ${({ theme }) => theme.fonts.sizes[6]}px;
  line-height: 60px;

  text-align: center;
  letter-spacing: -0.015em;

  color: ${({ theme }) => theme.colors.black};
`;

export const Description = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fonts.sizes[3]}px;
  line-height: 33px;

  text-align: center;
  letter-spacing: -0.015em;

  color: ${({ theme }) => theme.colors.grey};
`;
