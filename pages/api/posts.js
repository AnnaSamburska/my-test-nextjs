import mocker from 'mocker-data-generator';

// setting for fake data
const setting = {
	id: {
		faker: 'random.uuid',
	},
	title: {
		faker: 'lorem.sentence',
	},
	description: {
		faker: 'lorem.sentences(3)',
	},
	// fixed for using in getStaticProps
	createdAt: {
		function: function() {
			return this.faker.date.past().toJSON(); 
		},
	},
};

export async function getData() {
	const posts = mocker()
		.schema('posts', setting, 10, { uniqueField: 'id' })
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