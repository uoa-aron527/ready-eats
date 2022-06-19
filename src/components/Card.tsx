import styled from "styled-components";

export const Card = styled.div`
border-radius: 2rem;
min-height: 30rem;
overflow: hidden;
position: relative;

img {
  border-radius: 2rem;
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

p {
  z-index: 10;
  position: absolute;
  left: 50%;
  bottom: 0%;
  transform: translate(-50%, 0%);
  color: white;
  width: 100%;
  font-weight: 600;
  font-size: 1rem;
  height: 40%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
`;
