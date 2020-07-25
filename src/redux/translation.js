export function setTranslation(lang) {
	return {
		type: 'SET_TRANSLATION',
		payload: lang
	};
}

const english = {
	searchTitle: 'Search',
	searchPlaceHolder: 'Look for a movie!',
	noResults: 'Ops! There arent any results for your search. Try again!',
	searchNavbar: 'Search',
	watchedNavbar: 'Watched',
	pendingNavbar: 'Pending',
	watchedTitle: 'Your Watched Movies',
	pendingTitle: 'Your Pending Movies'
};

const spanish = {
	searchTitle: 'Buscar',
	searchPlaceHolder: 'Busca una película',
	noResults: 'Vaya! Parece que tu búsqueda no ha dadao resultado. ¡Intentalo de nuevo!',
	searchNavbar: 'Buscar',
	watchedNavbar: 'Vistas',
	pendingNavbar: 'Pendientes'
};

const portuguese = {};

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
			}
		default:
			return setTranslation;
	}
}
