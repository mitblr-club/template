import { How, What, Why } from './questionComponents/data';
import Quest from './questionComponents/quest';

const About = () => {
  return (
    <div className="mt-c20 px-0 pb-c3 md:mt-c10 xl:mt-c5 xl:px-c8">
      <h1 className="text-center text-6xl font-bold">About Us</h1>
      <div className="mt-c20 flex flex-col gap-12 p-c6 md:mt-c10 lg:mt-c5 xl:mt-c1">
        <Quest header={'What'} content={What} />
        <Quest header={'Why'} content={Why} />
        <Quest header={'How'} content={How} />
      </div>
    </div>
  );
};

export default About;
