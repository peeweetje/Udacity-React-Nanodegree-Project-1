import styled from 'styled-components';

export const LoadingStyle = styled.div`
  max-width: 50%;
`;

export const LoadingAnimation = styled.span`
  width: 2.5rem;
  height: 2.5rem;
  border:  0.3125rem solid rgba(189,189,189 ,0.25);
  border-left-color: #4b5179;
  border-top-color: #4b5179;
  border-radius: 50%;
  display: inline-block;
  animation: rotate 700ms infinite linear;
}

@keyframes rotate {
  to {
    transform: rotate(1turn)
  }
`;
