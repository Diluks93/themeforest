import styled, { css } from 'styled-components';

export const SubTitle = styled.h2<{ $full?: boolean; $left?: boolean }>`
  font-size: 38px;
  height: fit-content;
  line-height: 56px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.black};
  width: 540px;
  font-weight: 800;
  text-align: center;
  width: 100%;
`;

export const Wrapper = styled.div<{
  $row?: boolean;
  $col?: boolean;
}>`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.gaps[2]}px;
  width: 100%;

  ${({ $row }) =>
    $row
      ? css`
          align-items: center;
          justify-content: space-between;
        `
      : css``};

  ${({ $col }) =>
    $col
      ? css`
          column-gap: 30px;
        `
      : css``};
`;

export const Description = styled.p`
  position: relative;

  font-family: 'Open Sans';
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;

  color: ${({ theme }) => theme.colors.grey};
`;
