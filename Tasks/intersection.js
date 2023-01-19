// Find an intersection of two dictionaries
"use strict";
// destructurize incoming array into 2 objects
// removed Object.keys(firstObj) assignement to variable

const intersection = (firstObj, secondObj = args) => {
	for (const key of Object.keys(firstObj)) {
		console.log(firstObj[key]);
		firstObj[key] === secondObj[key]
			? (secondObj[key] = firstObj[key])
			: delete firstObj[key];
	}

	return firstObj;
};

require("../Tests/intersection.js")(intersection);
