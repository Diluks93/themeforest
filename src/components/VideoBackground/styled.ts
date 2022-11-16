import styled from 'styled-components';

export const VideoStyled = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  min-width: 100%;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: -999;
`;
