import { AboutMe } from './components/aboutme';
import { TechStack } from './components/techstack';

export const metadata = {
  title: 'Shivaansh Agarwal',
};
export default function Home() {
  return (
    <div>
      <AboutMe />
      <TechStack />
    </div>
  );
}
