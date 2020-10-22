import Head from 'next/head';
import Container from '@material-ui/core/Container';

export default function Layout({ children }) {
	return (
		<Container fixed>
			<Head>
			<title>The smallest app</title>
			</Head>
			<main>{children}</main>
		</Container>
	)
}
