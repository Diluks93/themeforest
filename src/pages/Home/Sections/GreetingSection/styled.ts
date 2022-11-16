import styled from 'styled-components';

import { Container, Description } from 'styles';
import { SectionStyled } from 'components/Section/styled';

export const ContainerStyled = styled(Container)`
  column-gap: ${({ theme }) => theme.gaps[3]}px;
  flex-direction: row;
  padding: ${({ theme }) => theme.sizes.container.paddings[0]}px 0
    ${({ theme }) => theme.sizes.container.paddings[1]}px;
`;

export const DescriptionStyled = styled(Description)`
  font-size: ${({ theme }) => theme.fonts.sizes[2]}px;
  line-height: ${({ theme }) => theme.fonts.heights[2]}px;
  position: relative;
  width: ${({ theme }) => theme.sizes.description.width[0]}px;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fonts.sizes[7]}px;
  line-height: ${({ theme }) => theme.fonts.heights[6]}px;
  letter-spacing: ${({ theme }) => theme.fonts.spacings[1]}em;
  color: ${({ theme }) => theme.colors.black};
  height: ${({ theme }) => theme.sizes.title.height[0]}px;
  width: ${({ theme }) => theme.sizes.title.width[0]}px;
  font-weight: ${({ theme }) => theme.fonts.weights[4]};
`;

export const Section = styled(SectionStyled)`
  flex-direction: column;
`;

export const Image = styled.img`
  max-width: 1920px;
  object-fit: cover;
`;
