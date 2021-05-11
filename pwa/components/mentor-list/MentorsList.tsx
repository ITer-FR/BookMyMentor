import styled from 'styled-components';
import MentorCard from '../mentor-card/MentorCard';
import { MentorCardArrayCollection } from '../../types/Collection';
import MentorDivider from './MentorDivider';
import React from 'react';

const mentorsData: MentorCardArrayCollection = [
  {
    id: '1',
    imageSource: 'https://fakeimg.pl/200x200/ff0000/000',
    name: 'Augustin Trottier',
    job: 'Développeur web Sénior',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, asperiores.',
    time: 'Long terme',
  },
  {
    id: '2',
    imageSource: 'https://fakeimg.pl/200x200/ff0000/000',
    name: 'Eve Boffrand',
    job: 'Développeur web Sénior',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, asperiores.',
    time: 'Long terme',
  },
  {
    id: '3',
    imageSource: 'https://fakeimg.pl/200x200/ff0000/000',
    name: 'Bo Gausse',
    job: 'Développeur web Sénior',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, asperiores.',
    time: 'Long terme',
  },
  {
    id: '4',
    imageSource: 'https://fakeimg.pl/200x200/ff0000/000',
    name: 'Dark Maul',
    job: 'Développeur web pas net',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, asperiores.',
    time: 'Long terme',
  },
  {
    id: '5',
    imageSource: 'https://fakeimg.pl/200x200/ff0000/000',
    name: 'Napoleon',
    job: 'Développeur de stategie senior',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, asperiores.',
    time: 'Long terme',
  },
  {
    id: '6',
    imageSource: 'https://fakeimg.pl/200x200/ff0000/000',
    name: 'Marcus Aurelius',
    job: 'Développeur de conscience niveau empereur',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, asperiores.',
    time: 'Long terme',
  },
  {
    id: '7',
    imageSource: 'https://fakeimg.pl/200x200/ff0000/000',
    name: 'portgas d ace',
    job: 'Développeur Blockchain chaud bouillant',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, asperiores.',
    time: 'Long terme',
  },
  {
    id: '8',
    imageSource: 'https://fakeimg.pl/200x200/ff0000/000',
    name: 'Monkey D Lufy',
    job: 'Développeur Cloud Elastique',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, asperiores.',
    time: 'Long terme',
  },
];

const Box = styled.div`
  padding: 1rem;
  text-align: center;
`;

const Topic = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 3rem;
  padding: 6rem 0;
`;

const ListWrapper = styled.ul`
  position: relative;
  max-width: 140rem;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

const MentorsList: React.FC = () => (
  <Box>
    <Topic>{mentorsData.length} mentors disponibles pour vous aider</Topic>
    <ListWrapper>
      {mentorsData &&
        mentorsData.map(({ id, imageSource, name, job, text, time }, index) => (
          <React.Fragment key={id}>
            <MentorCard imageSource={imageSource} name={name} job={job} text={text} time={time} />
            <MentorDivider index={index} />
          </React.Fragment>
        ))}
    </ListWrapper>
  </Box>
);

export default MentorsList;
