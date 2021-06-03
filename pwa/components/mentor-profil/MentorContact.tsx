import styled from 'styled-components';

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: 8 / 2 / 9 / 3;
  padding-bottom: 2rem;
  @media screen and (min-width: 768px) {
    grid-area: 6 / 1 / 7 / 2;
  }
`;

const ContactTitle = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  flex: 100%;
  font-size: 3rem;
  font-weight: 400;
  text-align: center;
  margin-bottom: 2rem;
`;

const ContactItem = styled.span`
  font-size: 1.4rem;
  font-weight: 700;
  margin-left: 4rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const MentorContact = () => (
  <Contact>
    <ContactTitle>Contact</ContactTitle>
    <ContactItem>Linkedin: ajopaofapo.fr</ContactItem>
    <ContactItem>Linkedin: ajopaofapo.fr</ContactItem>
    <ContactItem>Linkedin: ajopaofapo.fr</ContactItem>
  </Contact>
);

export default MentorContact;
