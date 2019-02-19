import styled from "styled-components";
import devices from "../utils/styledUtils";

const StyledLargeBtn = styled.button`
  border: 0;
  border-radius: 5px;
  color: #fff;
  width: 100%;
  height: 50px;
  display: block;
  margin: 0 auto;
  background: #eb6259;

  &:hover {
    cursor: pointer;
    transform: translateY(2px);
    box-shadow: 10px 55px 150px -20px #2a628f;
  }

  &:active {
    transform: translateY(4px);
    background: #2a628f;
  }

  ${devices.md`
        width: 60%;
        position: relative;
        top: 80%;
    `}
`;

export default StyledLargeBtn;
