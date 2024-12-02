import "../style/global.scss";
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>陳姿卉的前端筆記</title>
				<meta name="description" content="全站的預設描述" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}
