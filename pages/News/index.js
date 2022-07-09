import axios from 'axios';
import Image from 'next/image';

export default function News({articles}) {
  return (
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
  );
}

export async function getServerSideProps() {
  try {
    const news = await axios.get(
      'https://saurav.tech/NewsAPI/everything/cnn.json',
    );
    console.log(news.data.articles);
    return {props: {articles: news.data.articles}};
  } catch (e) {
    console.log(e.message);
    return {props: {articles: []}};
  }
}
