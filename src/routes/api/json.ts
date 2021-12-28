export const get = (ctx) => {
	console.log(ctx);
	return {
		body: JSON.stringify({
			message: 'Hello world'
		})
	};
};
