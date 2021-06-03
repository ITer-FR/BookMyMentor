import styled from 'styled-components';

const SvgDivider = styled.svg`
  max-width: 50%;
  height: 2rem;
  flex: 100%;
  margin: 2rem auto;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const HelpFor = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-area: 7 / 2 / 8 / 3;
  padding: 0 1rem;
  @media screen and (min-width: 768px) {
    grid-area: auto / 2 / 9 / 3;
    padding-bottom: 2rem;
  }
`;

const HelpForTitle = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  font-size: 2rem;
  flex: 100%;
  padding: 1rem 0;
`;

const HelpForSkillSvgWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const HelpForSkill = styled.span`
  align-items: center;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.quaternary};
  display: flex;
  font-size: 1.2rem;
  font-weight: 700;
  height: 3.6rem;
  justify-content: center;
  padding: 0.7rem;
`;

const MentorHelpFor = () => (
  <HelpFor>
    <HelpForTitle>John Doe peut vous aider pour :</HelpForTitle>
    <HelpForSkill>Entretien</HelpForSkill>
    <HelpForSkillSvgWrapper>
      <SvgDivider width="743" viewBox="0 0 743 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="224.145" height="10" rx="2.5" fill="#E31B84" />
        <rect x="257.352" width="224.145" height="10" rx="2.5" fill="#E31B84" />
        <rect x="518.855" width="224.145" height="10" rx="2.5" fill="#E31B84" />
      </SvgDivider>
    </HelpForSkillSvgWrapper>
  </HelpFor>
);

export default MentorHelpFor;
