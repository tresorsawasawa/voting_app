import React from 'react';
import { motion } from 'framer-motion';
// import Avatar from '../../assets/images/user_avatar.png';
import './Home.scss';

const Home = () => {
  const transition = {
    type: 'spring',
    duration: 3,
  };

  const mobile = window.innerWidth <= 992;

  return (
    <section className="home">
      <div className="leftHome">
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? '178px' : '238px' }}
            whileInView={{ left: '8px' }}
            transition={{ ...transition, type: 'tween' }}
            className="background"
          />
          <span>Welcome to the best voting app</span>
        </div>

        <div className="hero-text">
          <div className="text">
            <span className="stroke-text">Choose </span>
            <span>Your</span>
          </div>

          <div>
            <span>local hero</span>
          </div>

          <div className="text-description">
            <p>
              Real change, enduring change, happens one step at a time. Lorem
              ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
