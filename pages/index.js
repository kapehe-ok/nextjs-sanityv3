import { groq } from 'next-sanity'
import Link from 'next/link';
import { getClient } from '../lib/sanity.server'

export default function Home({ articles }) {
  return (
    <main>
      <Link href="/"><a>Home</a></Link>
      <Link href="/admin"><a>Super Secret Sanity Studio</a></Link>

      <nav>
        {articles?.map((article) => (
          <Link href={`/${article.slug}`} key={article._id}>
            <a>{article.title}</a>
          </Link>
        ))}
      </nav>
    </main>
  )
}

export async function getStaticProps() {
  // get all of our articles
  const articles = await getClient().fetch(
    groq`*[_type == "article" && defined(slug.current)] {
      _id,
      title,
      "slug": slug.current
    }`
  )

  return {
    props: { articles }
  }
}