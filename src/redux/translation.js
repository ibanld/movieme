import { english, spanish, portuguese } from '../languages';

export function setTranslation(lang) {
	return {
		type: 'SET_TRANSLATION',
		payload: lang
	};
}

export default function translationReducer(setTranslation = english, action) {
	switch (action.type) {
		case 'SET_TRANSLATION':
			switch (action.payload) {
				case 'en-US':
					setTranslation = english;
					return setTranslation;
				case 'es-ES':
					setTranslation = spanish;
					return setTranslation;
				case 'pt-BR':
					setTranslation = portuguese;
					return setTranslation;
				default:
					return setTranslation;
			}
		default:
			return setTranslation;
	}
}
