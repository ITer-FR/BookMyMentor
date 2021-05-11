import styled from 'styled-components';
import SwitchButton from './SwitchButton';

const Box = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 1.5rem 2rem;
`;

const ThemeModeDescription = styled.span`
  font-size: 10px;
  margin-right: 0.5rem;
`;
const ToggleTheme = () => (
  <Box>
    <ThemeModeDescription>{'Mode sombre'}</ThemeModeDescription>
    <SwitchButton />
  </Box>
);

export default ToggleTheme;
