import styled, { css } from 'styled-components';

export const TabStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 35px;
  gap: 15px;

  width: 100%;
  height: fit-content;

  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 6px;
`;

export const QuestionBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Question = styled.h4<{ $open: boolean }>`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 33px;

  letter-spacing: -0.015em;

  ${({ $open, theme }) =>
    $open
      ? css`
          color: ${theme.colors.primary};
        `
      : css`
          color: ${theme.colors.black};
        `}
`;

export const Button = styled.button<{ $open: boolean }>`
  width: 24px;
  height: 24px;
  background: none;
  border: none;

  ${({ $open, theme }) =>
    $open
      ? css`
          svg {
            fill: ${theme.colors.primary};
          }
        `
      : css`
          svg {
            fill: ${theme.colors.black};
          }
        `}
`;

export const Answer = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 33px;

  letter-spacing: -0.015em;

  color: ${({ theme }) => theme.colors.grey};
`;
