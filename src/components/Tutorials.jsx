import React from 'react';
import './Tutorials.scss';
import PageTitle from './PageTitle';
const Tutorials = () => {
  return (
    <section className="content-section">
      <div className="container">
        <PageTitle
          title="Tutorials"
          subtitle="My Teachings"
          style={{ margin: '1rem 0 2rem 0' }}
        />
        <div className="tutorials-container">
          <p>
            Web development doesn't have to be too hard. This page will
            aggregate my tutorials covering different areas of full stack web
            development. So, do watch this space for updates. In the meantime,
            Feel free to check out my YouTube channel for the entire library of
            video courses and tutorials.
          </p>
          <a
            href="https://www.youtube.com/channel/UCLw2smPQhEk87GOi2FA9aEQ"
            target="_blank"
            rel="noreferrer"
            className="link-to-channel"
          >
            Go to Channel
          </a>
        </div>
      </div>
    </section>
  );
};

export default Tutorials;
