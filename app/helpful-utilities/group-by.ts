export const groupBy = function<T>(
	array: Array<T>,
	criteria: Function | string
): Array<Array<T>> {
	const objectArray = array.reduce(function(
		obj: { [key: string]: Array<T> },
		item: T
	) {
		const key =
			typeof criteria === 'function' ? criteria(item) : (item as any)[criteria];

		if (!obj.hasOwnProperty(key)) {
			obj[key] = [];
		}

		obj[key].push(item);

		return obj;
	},
	{});
	return Object.keys(objectArray).map((key) => objectArray[key]);
};
