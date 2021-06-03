import styled from 'styled-components';

const ExplainationWrapper = styled.div`
  grid-area: 6 / 2 / 7 / 3;
  padding: 0 1rem;
  @media screen and (min-width: 768px) {
    grid-area: 3 / 2 / 8 / 3;
    margin-top: 4rem;
  }
`;

const Explaination = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    padding-bottom: 2rem;
  }
`;

const ExplainationTitle = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  flex: 100%;
`;

const ExplainationText = styled.p`
  color: ${({ theme }) => theme.colors.primary};
`;

const SvgDivider = styled.svg`
  max-width: 50%;
  height: 2rem;
  flex: 100%;
  margin: 2rem auto;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const MentorExplaination = () => (
  <ExplainationWrapper>
    <Explaination>
      <ExplainationTitle>Présente toi en quelques mots ?</ExplainationTitle>
      <ExplainationText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tempore veritatis culpa hic?
        Quisquam animi, error quis sed facere dolor, asperiores accusantium culpa, aperiam eligendi
        quibusdam delectus aspernatur tempora commodi?
      </ExplainationText>
      <SvgDivider
        width="743"
        height="20"
        viewBox="0 0 743 5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="224.145" height="10" rx="2.5" fill="#E31B84" />
        <rect x="257.352" width="224.145" height="10" rx="2.5" fill="#E31B84" />
        <rect x="518.855" width="224.145" height="10" rx="2.5" fill="#E31B84" />
      </SvgDivider>
    </Explaination>
    <Explaination>
      <ExplainationTitle>Présente toi en quelques mots ?</ExplainationTitle>
      <ExplainationText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tempore veritatis culpa hic?
        Quisquam animi, error quis sed facere dolor, asperiores accusantium culpa, aperiam eligendi
        quibusdam delectus aspernatur tempora commodi?
      </ExplainationText>
      <SvgDivider
        width="743"
        height="20"
        viewBox="0 0 743 5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="224.145" height="10" rx="2.5" fill="#E31B84" />
        <rect x="257.352" width="224.145" height="10" rx="2.5" fill="#E31B84" />
        <rect x="518.855" width="224.145" height="10" rx="2.5" fill="#E31B84" />
      </SvgDivider>
    </Explaination>
    <Explaination>
      <ExplainationTitle>Présente toi en quelques mots ?</ExplainationTitle>
      <ExplainationText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tempore veritatis culpa hic?
        Quisquam animi, error quis sed facere dolor, asperiores accusantium culpa, aperiam eligendi
        quibusdam delectus aspernatur tempora commodi?
      </ExplainationText>
      <SvgDivider
        width="743"
        height="20"
        viewBox="0 0 743 5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="224.145" height="10" rx="2.5" fill="#E31B84" />
        <rect x="257.352" width="224.145" height="10" rx="2.5" fill="#E31B84" />
        <rect x="518.855" width="224.145" height="10" rx="2.5" fill="#E31B84" />
      </SvgDivider>
    </Explaination>
    <Explaination>
      <ExplainationTitle>Présente toi en quelques mots ?</ExplainationTitle>
      <ExplainationText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tempore veritatis culpa hic?
        Quisquam animi, error quis sed facere dolor, asperiores accusantium culpa, aperiam eligendi
        quibusdam delectus aspernatur tempora commodi?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ut tempore veritatis culpa hic? Quisquam animi, error quis sed facere
        dolor, asperiores accusantium culpa, aperiam eligendi quibusdam delectus aspernatur tempora
        commodi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tempore veritatis culpa
        hic? Quisquam animi, error quis sed facere dolor, asperiores accusantium culpa, aperiam
        eligendi quibusdam delectus aspernatur tempora commodi?Lore
      </ExplainationText>
    </Explaination>
  </ExplainationWrapper>
);

export default MentorExplaination;
