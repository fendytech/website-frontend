import React, { useEffect, useRef } from 'react';
import { Input, Form } from 'antd';
import { useField } from 'react-final-form';
import PropTypes from 'prop-types';

import { composeInputHandlers } from '../../utils/input-util';

function InputField({ name, className, validate, redirect, ...rest }) {

	const ref = useRef();
	let { input, meta } = useField(name, { validate });
	let handlers = composeInputHandlers(input, rest);
	let validateStatus = meta.touched && meta.error ? 'error' : '';
	let help = meta.touched ? meta.error : '';

	useEffect(() => {
		if (redirect && ref.current) {
			ref.current.addEventListener('click', redirect);
		}
	}, [ref]);

	return (
		<Form.Item className={className} validateStatus={validateStatus} help={help}>
			<div ref={ref}>
				<Input
					{ ...input }
					{ ...rest }
					{ ...handlers }
					style={redirect ? { color: '#f15c22', cursor: 'pointer' } : {}}
				/>
			</div>
		</Form.Item>
	);
}

/**
 * See the link below for a full list of props for Input.
 * @link https://ant.design/components/input/#API
 */
InputField.propTypes = {
	name: PropTypes.string.isRequired,
	className: PropTypes.string,
	redirect: PropTypes.func,
	validate: PropTypes.func,
	onChange: PropTypes.func,
	onFocus: PropTypes.func,
	onBlur: PropTypes.func
};

export default InputField;
