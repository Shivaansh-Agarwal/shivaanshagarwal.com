import Image from 'next/image';
import { SectionWrapper } from './sectionwrapper';

export const TechStack = () => {
  return (
    <SectionWrapper sectionHeading='Tech Stack'>
      <div className='flex flex-col gap-y-2 max-w-xs md:max-w-full'>
        <TechSkillsList skillsList={frontendSkillsList} />
        <TechSkillsList skillsList={backendSkillsList} />
      </div>
    </SectionWrapper>
  );
};

type Skill = {
  skill: string;
  icon: string;
};
const frontendSkillsList: Skill[] = [
  {
    skill: 'Javascript',
    icon: '/images/icon-javascript.png',
  },
  {
    skill: 'ReactJS',
    icon: '/images/icon-reactjs.svg',
  },
  {
    skill: 'Redux',
    icon: '/images/icon-redux.png',
  },
  {
    skill: 'Next.js',
    icon: '/images/icon-nextjs.svg',
  },
  {
    skill: 'MUI',
    icon: '/images/icon-mui.png',
  },
  {
    skill: 'TailwindCSS',
    icon: '/images/icon-tailwindcss.svg',
  },
  {
    skill: 'HTML5',
    icon: '/images/icon-html.png',
  },
  {
    skill: 'CSS3',
    icon: '/images/icon-css.png',
  },
];

const backendSkillsList: Skill[] = [
  {
    skill: 'NodeJS',
    icon: '/images/icon-nodejs.png',
  },
  {
    skill: 'NestJS',
    icon: '/images/icon-nestjs.png',
  },
  {
    skill: 'MongoDB',
    icon: '/images/icon-mongodb.svg',
  },
  {
    skill: 'Redis',
    icon: '/images/icon-redis.svg',
  },
  {
    skill: 'RabbitMQ',
    icon: '/images/icon-rabbitmq.svg',
  },
];

type TechSkillsListProps = {
  skillsList: Skill[];
};
const TechSkillsList = ({ skillsList }: TechSkillsListProps) => {
  return (
    <div className='flex flex-row flex-wrap justify-start gap-2'>
      {skillsList.map((item, index) => {
        const { skill, icon } = item;
        return <Skill key={index} icon={icon} skill={skill} />;
      })}
    </div>
  );
};

const Skill = ({ icon, skill }: Skill) => {
  return (
    <div className='mr-4 flex flex-col items-center'>
      <Image src={icon} alt={skill} className='w-10 h-10' width={60} height={60} />
      <div className='text-sm'>{skill}</div>
    </div>
  );
};
