import createClient from '$lib/prismicio';

export async function load({ fetch, request, params }) {
	const client = createClient({ fetch, request });
	const document = await client.getByUID('page', params.uid);

	return {
		document
	};
}
