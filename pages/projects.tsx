import { FaLaptopCode } from 'react-icons/fa';
import Layout from '../components/Layout';
import Section from '../components/Section';
import { projects } from '../data/site';

export default function Projects() {
  return (
    <Layout title="Projects">
      <Section
        title="My Projects"
        Icon={FaLaptopCode}
        blurb="Personal and academic projects spanning ML, software development, and embedded systems."
        items={projects}
      />
    </Layout>
  );
}
