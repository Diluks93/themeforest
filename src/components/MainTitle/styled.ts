import styled from 'styled-components';

import { Description } from 'styles';

export const SubTitle = styled.h6`
  font-family: ${({ theme }) => theme.fonts.families[0]};
  font-weight: ${({ theme }) => theme.fonts.weights[3]};
  font-size: ${({ theme }) => theme.fonts.sizes[2]}px;
  line-height: ${({ theme }) => theme.fonts.heights[0]}px;

  text-align: center;
  letter-spacing: ${({ theme }) => theme.fonts.spacings[1]}em;

  color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.families[0]};
  font-weight: ${({ theme }) => theme.fonts.weights[4]};
  font-size: ${({ theme }) => theme.fonts.sizes[7]}px;
  line-height: ${({ theme }) => theme.fonts.heights[6]}px;

  text-align: center;
  letter-spacing: ${({ theme }) => theme.fonts.spacings[1]}em;

  color: ${({ theme }) => theme.colors.black};
`;

export const Wrapper = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

export const DescriptionStyled = styled(Description)`
  text-align: center;
`;
