import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

import { pathArrowRight } from 'static';

export const DropdownStyled = styled.div`
  order: 3;
`;

const fadeInLeft = keyframes`
  from {
    transform: translate(-100%, -50%);
  }
  to {
    transform: translate(0, -50%);
  }
`;

export const UnorderedList = styled.ul`
  position: absolute;
  width: 190px;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  background: ${({ theme }) => theme.colors.background};
  filter: drop-shadow(0px 2px 6px rgba(0, 43, 78, 0.15))
    drop-shadow(0px 1px 2px rgba(0, 43, 78, 0.3));
  border-radius: 6px;

  @media ${({ theme }) => theme.media.mobile} {
    width: 80%;
    left: 0;
    transform: translateY(-50%);
    animation: ${fadeInLeft} ease-in-out 0.8s;
  }
`;

export const ListItemStyled = styled(Link)`
  padding: 10px 20px;
  column-gap: ${({ theme }) => theme.gaps[0]}px;
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.grey};

  &:hover {
    color: ${({ theme }) => theme.colors.hover};
    font-weight: 500;
    &::after {
      content: '';
      background-image: url(${pathArrowRight});
      width: 15%;
      background-repeat: no-repeat;
    }
  }
`;
