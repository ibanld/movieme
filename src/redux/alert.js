export function showAlert(msg, severity) {
	return {
		type: 'SHOW_ALERT',
		payload: { msg, severity }
	};
}

export function hideAlert() {
	return {
		type: 'HIDE_ALERT'
	};
}

const initial = {
	open: false,
	msg: '',
	severity: 'success'
};

export default function alertReducer(initialState = initial, action) {
	switch (action.type) {
		case 'SHOW_ALERT':
			return {
				open: true,
				msg: action.payload.msg,
				severity: action.payload.severity
			};
		case 'HIDE_ALERT':
			return {
				open: false
			};
		default:
			return initialState;
	}
}
