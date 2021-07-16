import React from 'react';
import FeatureBox from './FeatureBox';
import PageTitle from './PageTitle';

import bloggingImg from '../images/marcelgatete-blog.svg';
import avatar from '../images/marcel-icon.svg';
import portfolioImg from '../images/Notebook-bro.svg';
import tutorialImg from '../images/marcelgatete-tutorials.svg';
const MainSection = () => {
  return (
    <>
      <PageTitle title="Marcel Gatete" subtitle="Full-Stack Developer" />
      <section className="main-section">
        <FeatureBox
          img={avatar}
          link="/about"
          boxTitle="About"
          desc="My Profile"
        />
        <FeatureBox
          img={portfolioImg}
          link="/portfolio"
          boxTitle="Portolio"
          desc="My Work"
        />
        <FeatureBox
          img={bloggingImg}
          link="/blog"
          boxTitle="Blog"
          desc="My Writings"
        />
        <FeatureBox
          img={tutorialImg}
          link="/tutorials"
          boxTitle="Tutorials"
          desc="My Teachings"
        />
      </section>
    </>
  );
};

export default MainSection;
