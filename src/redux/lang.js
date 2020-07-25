export function changeLang(lang) {
	return {
		type: 'SET_LANG',
		payload: lang
	};
}

export default function langReducer(lang = 'en-US', action) {
	switch (action.type) {
		case 'SET_LANG':
			lang = action.payload;
			return lang;

		default:
			return lang;
	}
}
