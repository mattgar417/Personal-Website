import { FaUsers } from 'react-icons/fa';
import Layout from '../components/Layout';
import Section from '../components/Section';
import { extracurriculars } from '../data/site';

export default function Extracurriculars() {
  return (
    <Layout title="Extracurriculars">
      <Section
        title="My Extracurriculars"
        Icon={FaUsers}
        blurb="Student organizations I have led and contributed to at Northeastern."
        items={extracurriculars}
        columns={2}
      />
    </Layout>
  );
}
