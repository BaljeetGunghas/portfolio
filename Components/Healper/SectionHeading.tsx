import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const SectionHeading = ({ children }: Props) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-once="true"
      className="relative w-fit mx-auto text-white text-2xl sm:text-3xl md:text-4xl font-bold px-4 py-2 border-b-2 border-slate-600 hover:border-slate-500 transition-colors duration-300"
    >
      {children}
    </div>
  );
};

export default SectionHeading;
