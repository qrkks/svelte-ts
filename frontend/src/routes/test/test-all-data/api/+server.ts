import { json } from '@sveltejs/kit';

export const GET = async () => {
	return json({ message: 'Hello, world! from api'});
};

export const POST = async () => {
	return json({ message: 'Hello, world! from api'});
};
