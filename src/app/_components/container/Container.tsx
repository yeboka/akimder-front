import React from 'react';

const Container = ({children, className}: {children: React.ReactNode, className?: string }) => {
  return (
    <section className={'w-full flex justify-center ' + className}>
      <div className={'w-full max-w-[1092px] flex flex-col items-center mx-6'}>
        {children}
      </div>
    </section>
  );
};

export default Container;