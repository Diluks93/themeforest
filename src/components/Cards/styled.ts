import styled from 'styled-components';

export const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 35px;
  gap: 25px;

  width: 350px;
  height: 371px;

  background: ${({ theme }) => theme.colors.background};

  box-shadow: 0px 4px 12px rgba(12, 68, 204, 0.1);
`;

export const Avatar = styled.img`
  border-radius: 50%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 25px;

  width: 232px;
  height: 80px;
`;

export const Name = styled.span`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.black};
`;

export const Post = styled.span`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;

  letter-spacing: -0.01em;

  color: ${({ theme }) => theme.colors.grey};
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Description = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;

  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.grey};
`;

export const CardsStyled = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 30px;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 15px;

  width: 235px;
  height: 60px;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 15px 40px;
  gap: 10px;

  width: 110px;
  height: 60px;

  background: ${({ theme }) => theme.colors.tertiary};
  border: none;
  border-radius: 20px;

  svg {
    fill: ${({ theme }) => theme.colors.grey};
    width: 30px;
    height: 30px;
    filter: grayscale(1);
  }
`;
