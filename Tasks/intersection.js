// Find an intersection of two dictionaries
"use strict";
// Removed useless lexical environments
// changed the fundecl to funexpr
// added 'use strict'
// changed names of variables to camelCase

const intersection = (firstObj, secondObj) => {
	const firstObjKeys = Object.keys(firstObj);

	for (key of firstObjKeys) {
		if (firstObj[key] === secondObj[key]) {
			secondObj[key] = firstObj[key];
		} else {
			delete firstObj[key];
		}
	}

	return firstObj;
};

require("../Tests/intersection.js")(intersection);
