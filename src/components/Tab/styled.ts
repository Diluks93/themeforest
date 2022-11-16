import { Title } from 'components/Blogs/styled';
import styled, { css } from 'styled-components';
import { Description } from 'styles';

export const TabStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${({ theme }) => theme.sizes.card.padding[0]}px;
  gap: ${({ theme }) => theme.gaps[5]}px;

  width: 100%;
  height: fit-content;

  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: ${({ theme }) => theme.borderRadius}px;
  cursor: pointer;
`;

export const QuestionBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Question = styled(Title)<{ $open: boolean }>`
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

export const Answer = styled(Description)``;
