import styled from 'styled-components';

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 2.6rem;
  height: 1.4rem;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: grey;
  transition: 0.4s;
  border-radius: 34px;
  &:before {
    position: absolute;
    content: '';
    height: 1.1rem;
    width: 1.1rem;
    left: 1.5px;
    bottom: 1.5px;
    background-color: blue;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  :checked + ${Slider} {
    background-color: red;
    &::before {
      transform: translateX(1.2rem);
    }
  }
`;

const SwitchButton = () => (
  <>
    <Switch>
      <Input type="checkbox" />
      <Slider />
    </Switch>
  </>
);

export default SwitchButton;
