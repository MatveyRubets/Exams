// Find an intersection of two dictionaries
"use strict";
// Changed if...else condition to ternar operator construction
// destructurize incoming array into 2 objects

const intersection = (...argsofobject) => {
	const [firstObj, secondObj] = argsofobject;
	const firstObjKeys = Object.keys(firstObj);

	for (const key of firstObjKeys) {
		firstObj[key] === secondObj[key]
			? (secondObj[key] = firstObj[key])
			: delete firstObj[key];
	}

	return firstObj;
};

require("../Tests/intersection.js")(intersection);
