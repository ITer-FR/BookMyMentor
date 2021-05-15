import { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../contexts/ThemeContext';
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

const ToggleTheme: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <Box>
      <ThemeModeDescription>
        {`${theme === 'light' ? 'Mode sombre' : 'Mode clair'}`}
      </ThemeModeDescription>
      <SwitchButton OnCheck={toggleTheme} isChecked={theme === 'light' ? false : true} />
    </Box>
  );
};
export default ToggleTheme;
