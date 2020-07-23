import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { useSelector, useDispatch } from 'react-redux';
import { hideAlert } from '../redux/alert';

export const AlertComponent = () => {
	const dispatch = useDispatch();
	const alert = useSelector((state) => state.alerts);
	React.useEffect(
		() => {
			setTimeout(() => dispatch(hideAlert()), 3500);
		},
		[ alert.open ]
	);

	return (
		<Alert
			variant='filled'
			severity={alert.severity}
			style={{ width: '100%', margin: 'auto', display: alert.open ? 'block' : 'none' }}
		>
			{alert.msg}
		</Alert>
	);
};
