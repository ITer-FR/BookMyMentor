import styled from 'styled-components';

type props = {
  OnCheck: () => void;
  isChecked: boolean;
};

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
  background-color: ${({ theme }) => theme.colors.primary};
  transition: 0.4s;
  border-radius: 34px;
  &:before {
    position: absolute;
    content: '';
    height: 1.2rem;
    width: 1.2rem;
    left: 1.4px;
    bottom: 1.5px;
    background-color: ${({ theme }) => theme.colors.tertiary};
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  :checked + ${Slider} {
    background-color: ${({ theme }) => theme.colors.primary};
    &::before {
      transform: translateX(1.2rem);
    }
  }
`;

const SwitchButton: React.FC<props> = ({ OnCheck, isChecked }) => {
  return (
    <>
      <Switch>
        <Input type="checkbox" checked={isChecked} onChange={OnCheck} />
        <Slider />
      </Switch>
    </>
  );
};

export default SwitchButton;
