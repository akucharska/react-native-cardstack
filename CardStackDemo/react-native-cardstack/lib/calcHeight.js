"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (indexs, staticHeight, hoverOffset, cardsLength) {
	var selectedIndex = indexs.selectedIndex;
	var hoveredIndex = indexs.hoveredIndex;
	var cardIndex = indexs.cardIndex;

	if (!selectedIndex && selectedIndex !== 0) {
		var height = staticHeight / cardsLength * (cardsLength - cardIndex);
		return hoveredIndex === cardIndex && cardIndex !== 0 ? height + hoverOffset : height;
	}
	return selectedIndex === cardIndex ? staticHeight : 0;
};