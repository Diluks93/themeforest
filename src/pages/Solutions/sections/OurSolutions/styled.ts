import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Container } from 'styles';

export const ContainerStyled = styled(Container)`
  padding-bottom: ${({ theme }) => theme.sizes.container.paddings[2]}px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 40px 30px;
  margin-top: 50px;
`;

export const CardStyled = styled.div`
  width: 350px;
  height: 397px;
  padding: 41px 35px 35px;
  border-top: 6px solid ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: 0px 4px 12px rgba(12, 68, 204, 0.1);
  border-radius: 6px;
`;

export const Title = styled.h4`
  font-weight: ${({ theme }) => theme.fonts.weights[3]};
  font-size: 22px;
  line-height: 33px;
  letter-spacing: ${({ theme }) => theme.fonts.spacings[1]}em;
  color: ${({ theme }) => theme.colors.black};
`;

export const StyledLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.families[0]};
  font-weight: ${({ theme }) => theme.fonts.weights[3]};
  font-size: ${({ theme }) => theme.fonts.sizes[1]}px;
  line-height: ${({ theme }) => theme.fonts.heights[0]}px;

  display: flex;
  align-items: center;
  margin-top: auto;

  letter-spacing: ${({ theme }) => theme.fonts.spacings[0]}em;

  color: ${({ theme }) => theme.colors.primary};

  fill: ${({ theme }) => theme.colors.primary};
`;

export const Services = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  margin-top: 35px;
  gap: 15px;
`;

export const Service = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
  padding: 0px;
  gap: 7px;

  color: ${({ theme }) => theme.colors.black};

  svg {
    fill: ${({ theme }) => theme.colors.primary};
    transform: scale(1.3);
  }
`;
