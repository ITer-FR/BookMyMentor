import styled from 'styled-components';
import MentorCard from '../mentor-card/MentorCard';
import MentorDivider from './MentorDivider';
import React from 'react';
import useRequest from '../../hooks/useGetRequest';

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
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

const MentorsList: React.FC = () => {
  const { data, error } = useRequest('https://localhost/mentors?page=1');
  if (data) {
    console.log(data);
  }
  if (error) return <p>An error has occured</p>;
  if (!data) return <div>Loading...</div>;

  return (
    <Box>
      <Topic>
        {data['hydra:member'] && data['hydra:member'].length} mentors disponibles pour vous aider
      </Topic>
      <ListWrapper>
        {data['hydra:member'] &&
          data['hydra:member'].map((mentorData, index) => {
            const id = mentorData['@id'];
            const imageSource =
              mentorData.userId?.avatar ||
              'https://cdn2.iconfinder.com/data/icons/unigrid-human-vol-2/57/011_user_profile_avatar_man_boy_silhoette-512.png';
            const name = mentorData.userId?.first_name || 'DB bug A Fix';
            const job = 'Pas de job database';
            const text = mentorData.userId?.bio || 'DB bug A Fix';
            const time = mentorData.durations[0].time;
            const stack = mentorData.stack_techs;
            const soft_skills = mentorData.soft_skills;
            return (
              <React.Fragment key={id}>
                <MentorCard
                  imageSource={imageSource}
                  name={name}
                  job={job}
                  text={text}
                  time={time}
                  stack={stack}
                  soft_skills={soft_skills}
                />
                <MentorDivider index={index} />
              </React.Fragment>
            );
          })}
      </ListWrapper>
    </Box>
  );
};

export default MentorsList;
