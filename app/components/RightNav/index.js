import React from 'react';
// import { Button } from 'belle';
// import styled from 'styled-components';
import { Button } from 'reactstrap';
class RightNav extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="right-nav">
        <Button color="warning">Invite your team</Button>
      </div>
    );
  }
}

RightNav.propTypes = {

};

export default RightNav;
