import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 20px;

  width: 350px;
  height: 482px;
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

export const CardsStyled = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 30px;
`;

export const Title = styled.h4`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 33px;

  letter-spacing: -0.015em;

  color: ${({ theme }) => theme.colors.black};
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

export const PreviewBlog = styled.img`
  border-radius: 6px;
  object-fit: cover;
`;

export const StyledLink = styled(NavLink)`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  line-height: 24px;

  display: flex;
  align-items: center;
  letter-spacing: -0.01em;

  color: ${({ theme }) => theme.colors.primary};

  svg {
    fill: ${({ theme }) => theme.colors.primary};
  }
`;

export const Date = styled.time`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;

  letter-spacing: -0.015em;

  color: ${({ theme }) => theme.colors.grey};
`;
