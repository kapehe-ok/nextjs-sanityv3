import { groq } from 'next-sanity'
import Link from 'next/link'
import { getClient } from '../lib/sanity.server'

export default function Article({ article }) {
  return (
    <main>
      <Link href="/"><a>Home</a></Link>
      <Link href="/admin"><a>Super Secret Sanity Studio</a></Link>

      <h2>{article.title}</h2>
    </main>
  )
}

/**
 * ----------------
 * Tell Next.js how many pages we have
 * ----------------
 */
export async function getStaticPaths() {
  const paths = await getClient().fetch(
    groq`*[_type ==  "article" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  }
}

/**
 * ----------------
 * Get the data for a single page
 * ----------------
 */
export async function getStaticProps({ params }) {
  const article = await getClient().fetch(
    groq`
      *[_type ==  "article" && slug.current == $slug][0] {
        _id,
        title,
        "slug": slug.current
      }
    `,
    { slug: params.slug }
  )

  return {
    props: { article },
  }
}