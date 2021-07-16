import React from 'react';
import './PageTitle.scss';

const PageTitle = ({ title, subtitle, style }) => {
  return (
    <div className="page-title" style={style}>
      <h1 class="my-name">{title}</h1>
      <p class="my-title">{subtitle}</p>
    </div>
  );
};

export default PageTitle;
