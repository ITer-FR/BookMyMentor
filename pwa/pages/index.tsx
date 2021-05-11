import Head from 'next/head';
import Header from '../components/Header';
import MentorsList from '../components/mentor-list/MentorsList';

export default function Home() {
  return (
    <>
      <Head>
        <title>BookMyMentor</title>
      </Head>
      <Header />
      <MentorsList />
    </>
  );
}
