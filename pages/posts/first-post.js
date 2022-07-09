import Script from 'next/script';
import axios from "axios";
import Head from 'next/head';
import Pfp from '../../Components/ProfilePicture';
import Layout from '../../Components/Layout';
import styles from './first-post.module.css';

export default function FirstPost(props) {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() => {
          console.log(`FACEBOOK SDK LOADED!`);
        }}
      />

	  <div className={styles.profileContainer2}>
	  	<div >
      		<h1>First Post!</h1>
			<p>lorem ipsum dolor sit amet</p>
	  	</div>
      	<div className={styles.profileContainer}>
        	<p>written by: @{props.user.name.first + " " + props.user.name.last}</p>
        	<Pfp image={props.user.picture.medium}/>
      	</div>
	  </div>
    </Layout>
  );
}

export async function getStaticProps() {
	const url = "https://randomuser.me/api/";
	try{
		const user = await axios.get(url);
		console.log(user.data.results[0]);
		return {
			props: {
				user: user.data.results[0]
			}
		};
	} catch(e) {
		return {
			props: {
				user: null
			}
		}
	}

}

