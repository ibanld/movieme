import React from 'react';
import { useSelector } from 'react-redux';

export const WatchList = () => {
	const lang = useSelector((state) => state.lang);

	return <div>im a text in {lang}</div>;
};

export default WatchList;
