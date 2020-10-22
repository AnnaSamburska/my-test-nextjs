import mocker from 'mocker-data-generator';

// setting for fake data
const setting = {
	description: {
		faker: 'lorem.paragraph',
	},
	title: {
		faker: 'lorem.words(1)',
	},
	createdAt: {
		faker: 'date.past',
	},
};

export async function getData() {
	const posts = mocker()
		.schema('posts', setting, 10)
		.buildSync();
	
	// Fake database query
	const myData = new Promise((resolve) => {
		resolve(posts);
	});

	return myData;
};
	  
export default async (_, res) => {
	const myData = await getData();
	res.status(200).json(myData);
};