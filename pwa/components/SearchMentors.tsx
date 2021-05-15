import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
`;

const Box = styled.div`
  position: relative;
  max-width: 75rem;
  margin: 0 auto;
  padding: 6rem 3rem 0 3rem;
`;

const SearchBar = styled.input`
  width: 100%;
  height: 5rem;
  background: ${({ theme }) =>
    theme.colors.quaternary === '#272A3E' ? theme.colors.quaternary : 'white'};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) =>
    theme.colors.primary === '#C4C4C4' ? theme.colors.primary : theme.colors.secondary};
  padding: 0 1rem;
  :focus {
    outline: none;
  }
  ::placeholder {
    color: ${({ theme }) =>
      theme.colors.primary === '#C4C4C4' ? theme.colors.primary : theme.colors.secondary};
  }
  :focus::placeholder {
    color: transparent;
  }
  @media screen and (max-width: 610px) {
    font-size: 1.1rem;
  }
`;

const LoopSvg = styled.svg`
  position: absolute;
  right: 4rem;
  top: 7rem;
  width: 3rem;
  background: ${({ theme }) =>
    theme.colors.quaternary === '#272A3E' ? theme.colors.quaternary : 'white'};
`;
const CustomSvgPath = styled.path`
  fill: ${({ theme }) =>
    theme.colors.primary === '#C4C4C4' ? theme.colors.primary : theme.colors.secondary};
`;

const LoopIcon = () => (
  <LoopSvg viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <CustomSvgPath d="M8 0.5C12.1421 0.5 15.5 3.85786 15.5 8C15.5 9.7101 14.9276 11.2866 13.964 12.5483L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3466 19.0676 17.7794 19.0953 17.3871 18.7903L17.2929 18.7071L12.5483 13.964C11.2866 14.9276 9.7101 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8C0.5 3.85786 3.85786 0.5 8 0.5ZM8 2.5C4.96243 2.5 2.5 4.96243 2.5 8C2.5 11.0376 4.96243 13.5 8 13.5C11.0376 13.5 13.5 11.0376 13.5 8C13.5 4.96243 11.0376 2.5 8 2.5Z" />
  </LoopSvg>
);

const SearchMentors = () => (
  <Container>
    <Box>
      <SearchBar placeholder="Sur quels sujets souhaites-tu être aidé ?" />
      <LoopIcon />
    </Box>
  </Container>
);

export default SearchMentors;
