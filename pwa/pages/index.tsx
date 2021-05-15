import Layout from '../components/Layout';
import MentorsList from '../components/mentor-list/MentorsList';
import SearchMentors from '../components/SearchMentors';

export default function Home() {
  return (
    <Layout>
      <SearchMentors />
      <MentorsList />
    </Layout>
  );
}
