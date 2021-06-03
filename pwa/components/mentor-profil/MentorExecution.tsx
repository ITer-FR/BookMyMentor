import styled from 'styled-components';

const Execution = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-area: 5 / 2 / 6 / 3;
  padding: 0 1rem;
  @media screen and (min-width: 768px) {
    grid-area: 4 / 1 / 5 / 2;
  }
`;

const ExecutionTitle = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
  font-weight: 700;
`;
const Logo = styled.div``;
const MentorExecution = () => (
  <Execution>
    <ExecutionTitle>Son mentorat peut se dérouler</ExecutionTitle>
    <Logo>lol</Logo>
  </Execution>
);

export default MentorExecution;
