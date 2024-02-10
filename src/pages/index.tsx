import React from 'react';

import type { NextPageWithLayout } from '@/types/generics';

const Home: NextPageWithLayout = function () {
  return <div className="flex flex-col gap-6 self-stretch">home</div>;
};

Home.layout = 'none';
export default Home;
