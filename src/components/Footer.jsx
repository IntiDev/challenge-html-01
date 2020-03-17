import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="columna">
          <h4>Deck</h4>
          <p>&copy; 2018 Deck</p>
          <p>Component based UI kit</p>
        </div>
        <div className="columna">
          <ul>
            <li>Technology</li>
            <li>Ideas</li>
            <li>Leadership</li>
            <li>Video</li>
            <li>News</li>
            <li>Finance</li>
            <li>Entertainment</li>
          </ul>
        </div>
        <div className="columna">
          <p>
            Follow us:
            <i className="instagram" />
            <i className="pinterest" />
            <i className="twitter" />
            <i className="facebook" />
          </p>
          <input type="text" />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
