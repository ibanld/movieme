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
		<div
			style={{
				display: alert.open ? 'flex' : 'none',
				position: 'absolute',
				justifyContent: 'center',
				width: '100%',
				position: 'sticky',
				top: 0,
				zIndex: 9999
			}}
		>
			<Alert variant='filled' severity={alert.severity}>
				{alert.msg}
			</Alert>
		</div>
	);
};
