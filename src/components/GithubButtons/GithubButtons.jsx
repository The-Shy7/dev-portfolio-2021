import React from 'react';
import GitHubButton from 'react-github-btn';

const GithubButton = () => (
  <>
    <GitHubButton
      className="github-button"
      href="https://github.com/The-Shy7/smogondb/fork"
      data-icon="octicon-repo-forked"
      data-size="large"
      data-show-count="true"
      aria-label="Fork The-Shy7/smogondb on GitHub"
    >
      Fork
    </GitHubButton>
    <GitHubButton
      className="github-button"
      href="https://github.com/The-Shy7/smogondb"
      data-icon="octicon-star"
      data-size="large"
      data-show-count="true"
      aria-label="Star The-Shy7/smogondb on GitHub"
    >
      Star
    </GitHubButton>
  </>
);

export default GithubButton;
