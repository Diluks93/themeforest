import styled, { css } from 'styled-components';

import { Container } from 'styles';

const styles = css<{ $black?: boolean }>`
  letter-spacing: ${({ theme }) => theme.fonts.spacings[1]}em;

  ${({ $black, theme }) =>
    $black
      ? css`
          color: ${theme.colors.black};
        `
      : css`
          color: ${theme.colors.white};
        `}
`;

export const ContainerStyled = styled(Container)`
  margin: 120px auto;
  max-height: 1680px;
`;

export const Images = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  width: 100%;
  height: fit-content;
  gap: ${({ theme }) => theme.gaps[8]}px;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 0;
    background-color: transparent;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius}px;
`;

export const Employee = styled.figcaption`
  position: absolute;
  bottom: ${({ theme }) => theme.gaps[7]}px;
  left: ${({ theme }) => theme.gaps[7]}px;
  color: white;
  z-index: 11;
  display: flex;
  flex-direction: column;
`;

export const Name = styled.span<{ $black?: boolean }>`
  font-family: ${({ theme }) => theme.fonts.families[0]};
  font-weight: ${({ theme }) => theme.fonts.weights[3]};
  font-size: ${({ theme }) => theme.fonts.sizes[3]}px;
  line-height: ${({ theme }) => theme.fonts.heights[2]}px;
  ${styles}
`;

export const Position = styled.span`
  font-family: ${({ theme }) => theme.fonts.families[1]};
  font-weight: ${({ theme }) => theme.fonts.weights[0]};
  font-size: ${({ theme }) => theme.fonts.sizes[2]}px;
  line-height: ${({ theme }) => theme.fonts.heights[1]}px;
  ${styles}
`;

export const Figure = styled.figure`
  position: relative;
  display: block;
  width: 350px;
  height: 500px;

  border-radius: ${({ theme }) => theme.borderRadius}px;

  &::before {
    content: '';
    z-index: 10;
    width: 100%;
    height: 100%;
    display: block;
    bottom: 0;
    position: absolute;
    border-radius: ${({ theme }) => theme.borderRadius}px;
    background: linear-gradient(
        180deg,
        rgba(40, 50, 66, 0) 26.37%,
        ${({ theme }) => theme.colors.secondary} 103.66%
      )
      center center no-repeat;
  }

  &:nth-child(1),
  &:nth-child(3n),
  &:nth-child(3n + 1) {
    padding-top: 120px;
    &::before,
    figcaption {
      transform: translateY(120px);
    }
  }
`;
