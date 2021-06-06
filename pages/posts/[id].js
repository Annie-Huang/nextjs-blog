import Layout from '../../components/layout';
import { getAllPostIds } from '../../lib/posts';

export default function Post() {
  return <Layout>...</Layout>;
}

export async function getStaticPaths() {
  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}
