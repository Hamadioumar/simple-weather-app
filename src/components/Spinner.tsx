import Image from 'next/image';
import React from 'react';

const Spinner = () => {
  return (
    <>
      <Image className='w-[200px] m-auto block' src={Spinner} alt='loading..' />
    </>
  );
};

export default Spinner;