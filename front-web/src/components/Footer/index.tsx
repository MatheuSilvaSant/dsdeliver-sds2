import React from 'react';

import {ReactComponent as YoutubeIcon} from '../../assets/icons/youtube.svg';
import {ReactComponent as LinkedinIcon} from '../../assets/icons/linkedin.svg';
import {ReactComponent as InstagramIcon} from '../../assets/icons/instagram.svg';

import './styles.css';

const Footer: React.FC = () => {
  return (
      <footer className="main-footer">
        App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
        <div className="footer-icons">
          <a href="https://www.youtube.com/channel/UC3twHmWQwtqEO7u-gB_2f7g" target="_new">
            <YoutubeIcon/>
          </a>
          <a href="https://www.linkedin.com/school/devsuperior/" target="_new">
            <LinkedinIcon/>
          </a>
          <a href="https://www.instagram.com/devsuperior.ig/">
            <InstagramIcon/>
          </a>
        </div>
      </footer>
  );
};

export default Footer;
