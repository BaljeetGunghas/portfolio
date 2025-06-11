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
      className="relative w-fit mx-auto text-white text-3xl sm:text-4xl font-bold uppercase px-6 py-3 bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 rounded-md shadow-lg"
    >
      {children}
      <div className="absolute bottom-0 left-0 h-1 w-full bg-pink-500 rounded-md opacity-80"></div>
    </div>
  );
};

export default SectionHeading;
