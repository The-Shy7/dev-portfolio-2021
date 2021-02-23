import React from 'react';
import GitHubButton from 'react-github-btn';

const GithubButton = () => (
  <>
    <GitHubButton
      className="github-button"
      href="https://github.com/The-Shy7/dev-portfolio-2021/fork"
      data-icon="octicon-repo-forked"
      data-size="large"
      data-show-count="true"
      aria-label="Fork The-Shy7/dev-portfolio-2021 on GitHub"
    >
      Fork
    </GitHubButton>
    <GitHubButton
      className="github-button"
      href="https://github.com/The-Shy7/dev-portfolio-2021"
      data-icon="octicon-star"
      data-size="large"
      data-show-count="true"
      aria-label="Star The-Shy7/dev-portfolio-2021 on GitHub"
    >
      Star
    </GitHubButton>
  </>
);

export default GithubButton;
