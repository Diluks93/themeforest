import styled from 'styled-components';

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fonts.sizes[10]}px;
  line-height: ${({ theme }) => theme.fonts.heights[8]}px;
  letter-spacing: ${({ theme }) => theme.fonts.spacings[1]}em;
  color: ${({ theme }) => theme.colors.black};
  width: ${({ theme }) => theme.sizes.title.width[0]}px;
  font-weight: ${({ theme }) => theme.fonts.weights[4]};
`;

export const Labeling = styled.span`
  font-family: ${({ theme }) => theme.fonts.families[0]};
  font-weight: ${({ theme }) => theme.fonts.weights[2]};
  font-size: ${({ theme }) => theme.fonts.sizes[1]}px;
  line-height: ${({ theme }) => theme.fonts.heights[0]}px;

  text-align: right;
  letter-spacing: ${({ theme }) => theme.fonts.spacings[0]}em;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.gaps[4]}px;
  color: ${({ theme }) => theme.colors.black};
  svg {
    fill: ${({ theme }) => theme.colors.black};
  }
`;
