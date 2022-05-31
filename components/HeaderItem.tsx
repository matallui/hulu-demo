import React, { SVGProps } from 'react';

interface Props {
  title: string;
  Icon: React.FC<SVGProps<SVGSVGElement>>;
}

const HeaderItem: React.FC<Props> = ({ title, Icon }) => {
  return (
    <div className='group flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white'>
      <Icon className='h-8 mb-1 group-hover:animate-bounce' />
      <p className='opacity-0 group-hover:opacity-100 tracking-widest'>
        {title}
      </p>
    </div>
  );
};

export default HeaderItem;
