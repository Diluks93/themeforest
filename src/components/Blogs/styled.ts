import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { CardStyled } from 'components/TestimonialsCard/styled';
import { Description } from 'styles';

export const BlogStyled = styled(CardStyled)`
  padding: 0px;
  background-color: transparent;
  height: fit-content;
  box-shadow: none;
`;

export const Title = styled.h4`
  font-family: ${({ theme }) => theme.fonts.families[0]};
  font-weight: ${({ theme }) => theme.fonts.weights[3]};
  font-size: ${({ theme }) => theme.fonts.sizes[4]}px;
  line-height: ${({ theme }) => theme.fonts.heights[3]}px;
  letter-spacing: ${({ theme }) => theme.fonts.spacings[1]}em;
  color: ${({ theme }) => theme.colors.black};
`;

export const DescriptionStyled = styled(Description)`
  font-size: ${({ theme }) => theme.fonts.sizes[2]}px;
  line-height: ${({ theme }) => theme.fonts.heights[1]}px;
`;

export const PreviewBlog = styled.img`
  border-radius: ${({ theme }) => theme.borderRadius}px;
  object-fit: cover;
`;

export const StyledLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.families[0]};
  font-weight: ${({ theme }) => theme.fonts.weights[3]};
  font-size: ${({ theme }) => theme.fonts.sizes[1]}px;
  line-height: ${({ theme }) => theme.fonts.heights[0]}px;

  display: flex;
  align-items: center;
  letter-spacing: ${({ theme }) => theme.fonts.spacings[0]}em;

  color: ${({ theme }) => theme.colors.primary};

  fill: ${({ theme }) => theme.colors.primary};
`;

export const Date = styled.time`
  font-family: ${({ theme }) => theme.fonts.families[1]};
  font-weight: ${({ theme }) => theme.fonts.weights[0]};
  font-size: ${({ theme }) => theme.fonts.sizes[1]}px;
  line-height: ${({ theme }) => theme.fonts.heights[0]}px;

  letter-spacing: ${({ theme }) => theme.fonts.spacings[1]}em;

  color: ${({ theme }) => theme.colors.grey};
`;
