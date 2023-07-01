import { getPost, getSortedPostsList } from '@/app/utils/posts';
import type { Post } from '../types';

export default async function Page({ params }: { params: { slug: string } }) {
  const postData = await getPost(params.slug);
  console.log('postData: ', postData);
  const { title, date, author, hero_image, contentHtml } = postData;
  return (
    <div>
      <h2>{title}</h2>
      <div>{date}</div>
      <div>{author}</div>
      <img src={hero_image} alt='' />
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  );
}

export async function generateStaticParams() {
  const posts = getSortedPostsList(false) as Post[];
  console.log('posts: ', posts);

  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}
