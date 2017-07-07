import React from 'react';
import OwlerLogo from './../../assets/images/owlerLogoWhite.png';
// import styled from 'styled-components';


class Logo extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="logo">
        <img alt="Owler" src={OwlerLogo} />
      </div>
    );
  }
}

Logo.propTypes = {

};

export default Logo;
