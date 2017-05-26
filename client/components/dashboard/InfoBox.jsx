import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import { white, grey800 } from 'material-ui/styles/colors';
import { typography } from 'material-ui/styles';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

class InfoBox extends React.Component {

  render() {
    const { color, title, value, Icon } = this.props;

    const styles = {
      content: {
        padding: '5px 10px',
        marginLeft: 90,
        height: 80
      },
      number: {
        display: 'block',
        fontWeight: typography.fontWeightMedium,
        fontSize: 18,
        color: grey800
      },
      text: {
        fontSize: 20,
        fontWeight: typography.fontWeightLight,
        color: grey800
      },
      iconSpan: {
        float: 'left',
        height: 90,
        width: 90,
        textAlign: 'center',
        backgroundColor: color
      },
      icon: {
        height: 48,
        width: 48,
        marginTop: 20,
        maxWidth: '100%'

      }
    };

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <Paper>
          <span style={styles.iconSpan}>
            <Icon
              color={white}
              style={styles.icon}
            />
          </span>

          <div style={styles.content}>
            <span style={styles.text}>{title}</span>
            <span style={styles.number}>{value}</span>
          </div>
        </Paper>
      </MuiThemeProvider>
    );
  }
}


InfoBox.propTypes = {
  Icon: PropTypes.any, // eslint-disable-line
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired
};

export default InfoBox;
