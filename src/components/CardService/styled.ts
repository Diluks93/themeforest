import styled from 'styled-components';

export const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: ${({ theme }) => theme.gaps[6]}px
    ${({ theme }) => theme.sizes.card.padding[0]}px;
  gap: ${({ theme }) => theme.gaps[6]}px;

  width: ${({ theme }) => theme.sizes.card.width[1]}px;

  border-radius: ${({ theme }) => theme.borderRadius}px;
`;
