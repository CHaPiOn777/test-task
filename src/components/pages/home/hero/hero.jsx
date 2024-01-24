import Image from 'next/image';

import heroIllustration from 'components/pages/home/hero/images/hero-illustration-2.svg';
import heroBG from 'components/pages/home/hero/images/hero-illustration-bg.svg';

import Form from './form';

const Hero = () => (
  <section className="hero-bg pt-20" style={{ backgroundImage: `url(${heroBG})` }}>
    <div className="container grid grid-cols-2 md:grid-cols-1 gap-10 relative items-center pt-[88px] lg:pt-14 sm:pt-10">
      <div className="col-span-1 pt-12 lg:pt-8">
        <div className="hero-round-gradient" />
        <h2 className="hero-title font-title text-7xl lg:text-6xl sm:text-4xl leading-[112.5%] pb-7">
          Revolutionize <br className="block lg:hidden" /> your DevOps journey with DevOptima
        </h2>
        <p className="text-white text-xl lg:text-lg sm:text-base leading-normal font-light tracking-tight-8 pt-0 pb-9">
          Empower teams to innovate faster through streamlined development,{' '}
          <br className="block lg:hidden" />
          efficient automated workflows, and reliable scaling.
        </p>
        <Form />
      </div>
      <div className="col-span-1 relative">
        <div className="hero-ellipse-gradient z-10" />
        <Image
          className="z-20 absolute xl:relative -right-7 xl:right-0 top-[-275px] xl:top-0 bg-transparent"
          src={heroIllustration}
          width={656}
          height={487}
          alt="hero"
        />
      </div>
    </div>
  </section>
);

export default Hero;
