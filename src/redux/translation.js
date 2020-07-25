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
	pendingTitle: 'Your Pending Movies',
	alertDeletedWatch: ' deleted from your Watched movies',
	alertAddedWatch: ' added to Watched Movies',
	alertDeletedPending: ' deleted from your Pending movies',
	alertAddedPending: ' added to Pending movies',
	ratingInit: 'You have rated ',
	ratingWith: ' with ',
	ratingRate: ' stars'
};

const spanish = {
	searchTitle: 'Buscar',
	searchPlaceHolder: 'Busca una película',
	noResults: 'Vaya! Parece que tu búsqueda no ha dadao resultado. ¡Intentalo de nuevo!',
	searchNavbar: 'Buscar',
	watchedNavbar: 'Vistas',
	pendingNavbar: 'Pendientes',
	alertDeletedWatch: ' eliminada de tus Películas Vistas',
	alertAddedWatch: ' añadida a Películas Vistas',
	alertDeletedPending: ' eliminada de tus Películas Pendientes',
	alertAddedPending: ' añadida a tus Películas Pendientes',
	ratingInit: 'Has valorado ',
	ratingWith: ' con ',
	ratingRate: ' estrellas'
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
