import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Div, Icon, Notification } from 'atomize';

const Alert = ({ alerts }) => {
  const [ showAlert, setShowAlert] = useState(true);
  return (
    <React.Fragment>
      {alerts.map((alert) => (
        <Notification
        position="relative"
          key={alert.id}
          bg={`${alert.alertType}700`}
          isOpen={showAlert}
          onClose={() => setShowAlert(false)}
          prefix={
            <Icon
              name={alert.alertType === 'success' ? 'Success' : 'CloseSolid'}
              color="white"
              size="18px"
              m={{ r: '0.5rem' }}
            />
          }
        >
          {alert.msg}
        </Notification>
      ))}
    </React.Fragment>
  );
};

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
