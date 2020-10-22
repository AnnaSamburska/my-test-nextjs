import Layout from '../components/layout';
import { getData } from './api/posts';
import Card from '../components/card';

export default function Home({ posts }) {
	return (
		<Layout>
			{posts.map(post => (
				<Card
					key={post.id}
					title={post.title}
					description={post.description}
					createdAt={post.createdAt}
				/>
			))}
		</Layout>
	)
}

export async function getStaticProps() {
	const { posts } = await getData();
	return {
		props: {
			posts,
		}
	};
}
