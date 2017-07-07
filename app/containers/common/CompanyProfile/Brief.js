import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'reactstrap';
import Divider from './../../../components/UI/Divider';
import linkedInImg from './../../../assets/images/icons/olr-icon-linkedin.svg';

class Brief extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { fbData } = this.props;
    return (
      <Card block inverse style={{ backgroundColor: '#FAFAFA', borderColor: '#FAFAFA', color: '#000000' }}>
        <div className="brief">
          <div className="brief-head">{fbData.name} at a glance.</div>
          <Divider />
          <div className="ceo-block flex-row">
            <div className="profile-image">
              <img alt={`${fbData.ceo[1].first_name} ${fbData.ceo[1].last_name}`} height="100" width="75" src={fbData.ceo[1].picture} />
            </div>
            <div className="profile-description">
              <div className="job-title">{fbData.ceo[0].job_title}</div>
              <div>{`${fbData.ceo[1].first_name} ${fbData.ceo[1].last_name}`}</div>
            </div>
          </div>
          <Divider />
          <div className="company-info">
            <div className="founded-info flex-row">
              <div className="left-block">
                <p>Founded:</p>
              </div>
              <div className="right-block">
                <p>{fbData.founded}</p>
              </div>
            </div>
            <div className="hq-info flex-row">
              <div className="left-block">
                <p>Headquarters:</p>
              </div>
              <div className="right-block">
                <p>{`${fbData.address.city}, ${fbData.address.state}, ${fbData.address.country}`}</p>
              </div>
            </div>
            <div className="status-info flex-row">
              <div className="left-block">
                <p>Status:</p>
              </div>
              <div className="right-block">
                <p>{`${fbData.ownership}, ${fbData.exchange}, ${fbData.ticker}`}</p>
              </div>
            </div>
            <div className="ind-info flex-row">
              <div className="left-block">Industry Sector:</div>
              <div className="right-block">
                {fbData.landing_pages.sectors.map((x, i) => <p key={i}>{x.name}</p>)}
                <p></p>
              </div>
            </div>
            <div className="completeness-info flex-row">
              <div className="left-block">Completeness</div>
              <div className="right-block">{Math.round(fbData.owler_alerts.completeness_score)}%</div>
            </div>
            <div className="social-info flex-row">
              <div className="left-block">Links</div>
              <div className="right-block">
                <a className="social-links" href={fbData.links.facebook}><img src={linkedInImg} className="social-icons" alt="Facebook" /></a>
                <a className="social-links" href={fbData.links.linkedIn}><img src={linkedInImg} className="social-icons" alt="LinkedIn" /></a>
                <a className="social-links" href={fbData.links.twitter}><img src={linkedInImg} className="social-icons" alt="Twitter" /></a>
              </div>
            </div>
          </div>
        </div>
      </Card>
    );
  }
}

Brief.propTypes = {
  fbData: PropTypes.object,
};

export default Brief;
