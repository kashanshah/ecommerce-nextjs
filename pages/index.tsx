import React from 'react';
import type { NextPage } from 'next';
import { HomeScreen } from '../src/screens/home';
import { SocialLinks } from '../src/components/social-links';

const Home: NextPage = () => {
  if (process.env.NODE_ENV !== 'production') {
    return (
      <div
        style={{ minHeight: '100vh', minWidth: '100%' }}
        className='d-flex align-items-center justify-content-center'
      >
        <div className='text-center'>
          <img src='/assets/img/logo/logo.png' style={{ maxWidth: '80%' }} />
          <div style={{ width: '10%', margin: 'auto' }}>
            <SocialLinks className='align-items-center justify-content-around mt-5' />
          </div>
        </div>
      </div>
    );
  }

  return <HomeScreen />;
};

export default Home;
