import React from 'react';
import PropTypes from 'prop-types';

import style from './submit-error.scss';

function SubmitMsg({ className, msg, styles }) {
	return (
		<span className={style[className] } style={styles}>{ msg }</span>
	);
}

SubmitMsg.propTypes = {
	className: PropTypes.string,
	msg: PropTypes.string.isRequired,
	styles: PropTypes.object
};

export default SubmitMsg;
