import axios from 'axios';
import Link from "next/link";

export default function News({articles}) {
  return (
	  <>
	  <div className='w-full mt-4 flex items-center justify-around'>
		<Link href="/">
			<a className='text-blue-900 underline font-bold uppercase'>Go to /</a>
		</Link>
		<h1 className='uppercase font-bold text-2xl pl-4 pt-4 underline'>Armaan's news website 🚀</h1>
		
	  </div>
    <div className="w-screen flex flex-column items-center justify-center min-h-screen p-6">
      <div className="w-[80%]">
        {articles.map(article => {
          return (
            <>
              <div className="container-content flex items-center justify-between my-7">
                <div className="text-container max-w-[50%]">
                  <h1 className="uppercase font-normal">{article.title}</h1>
                  <p className="mt-2 text-gray-500">{article.description}</p>
                </div>
                <img src={article.urlToImage} className="w-[300px] h-[180px]" />
              </div>
              <hr />
            </>
          );
        })}
      </div>
    </div>
	  </>
  );
}

export async function getServerSideProps() {
  try {
    const news = await axios.get(
      'https://saurav.tech/NewsAPI/everything/cnn.json',
    );
    return {props: {articles: news.data.articles}};
  } catch (e) {
    console.log(e.message);
    return {props: {articles: []}};
  }
}
