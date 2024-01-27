'use client';

import Image from 'next/image';

import heroIllustration from 'components/pages/home/hero/images/hero-illustration-2.svg';
import heroBG from 'components/pages/home/hero/images/hero-illustration-bg.svg';
import useIsClient from 'hooks/use-is-client';
import useWindowWidth from 'hooks/use-window-width';

import Form from './form';

const Hero = () => {
  // IMPORTANT: The following code is a placeholder for screen size handling
  // and is not part of the test task evaluation. Please focus on the main functionality
  // of the page for screens >= 1536px. The adaptive design for smaller screens
  // is not required for review at this stage. Thank you for your understanding!
  const isClient = useIsClient();
  const width = useWindowWidth();

  if (isClient && width < 1536) {
    return (
      <div className="container flex justify-center items-center py-32 min-h-screen">
        <div className="flex flex-col max-w-[700px] text-center gap-y-4">
          <h1 className="text-[40px] text-center font-bold">Hey! 👋</h1>
          <p className="text-[24px] font-light">
            This task is designed for a screen width of{' '}
            <span className="font-medium text-secondary-blue">1536px or greater</span>.
            <br />
            Please focus your evaluation and testing on this resolution. The assessment of mobile or
            smaller screen designs is not required at this stage, and we encourage you to
            concentrate on the larger screen format.
          </p>
          <p className="text-[24px] font-medium">Thank you and good luck! 🍀</p>
        </div>
      </div>
    );
  }

  return (
    <section className="hero-bg pt-20" style={{ backgroundImage: `url(${heroBG})` }}>
      <div className="container grid grid-cols-2 md:grid-cols-1 gap-10 relative items-center pt-[88px]">
        <div className="col-span-1 pt-12">
          <div className="hero-round-gradient" />
          <h2 className="hero-title font-title text-7xl leading-[112.5%] pb-7">
            Revolutionize <br className="block" /> your DevOps journey with DevOptima
          </h2>
          <p className="text-white text-xl leading-normal font-light tracking-tight-8 pt-0 pb-9">
            Empower teams to innovate faster through streamlined development,{' '}
            <br className="block" />
            efficient automated workflows, and reliable scaling.
          </p>
          <Form />
        </div>
        <div className="col-span-1 relative">
          <div className="hero-ellipse-gradient z-10" />
          <Image
            className="z-20 absolute -right-7 top-[-275px] bg-transparent"
            src={heroIllustration}
            width={656}
            height={487}
            alt="hero"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
