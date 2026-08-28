import { FaBriefcase } from 'react-icons/fa';
import Layout from '../components/Layout';
import Section from '../components/Section';
import { experiences } from '../data/site';

export default function Experiences() {
  return (
    <Layout title="Experiences">
      <Section
        title="My Experiences"
        Icon={FaBriefcase}
        blurb="Research labs, startups, and co-ops where I have built software and hardware."
        items={experiences}
        columns={2}
      />
    </Layout>
  );
}
