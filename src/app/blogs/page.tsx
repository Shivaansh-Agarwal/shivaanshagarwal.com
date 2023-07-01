import Link from 'next/link';
import { getSortedPostsList } from '../utils/posts';
import { MONTHS } from '../utils/utility';
import { Post } from './types';

export default function Page() {
  return (
    <div>
      <h1 className='text-3xl font-bold'>Writing</h1>
      <PostsList />
    </div>
  );
}

function PostsList() {
  const postsCategorizedByYear = getSortedPostsList(true) as Record<string, Post[]>;
  console.log(postsCategorizedByYear);
  return (
    <div className='flex flex-col gap-4 mt-6'>
      {Object.keys(postsCategorizedByYear).map((year) => {
        const postsInYear = postsCategorizedByYear[year];
        return (
          <section key={year}>
            <h2 className='text-2xl font-semibold'>{year}</h2>
            <ul>
              {postsInYear.map((post) => (
                <PostListItem post={post} key={post.slug} />
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}

type PostListItemProps = {
  post: Post;
};
function PostListItem({ post }: PostListItemProps) {
  const { slug, title, date } = post;
  const monthIndex = Number(date.split('-')[1]);
  const monthName = MONTHS[monthIndex];
  const dayIndex = date.split('-')[2].padStart(2, '0');
  return (
    <li className='flex flex-row justify-between items-start py-1 text-xs md:text-base border-b last:border-b-0'>
      <Link href={`/blogs/${slug}`} className='hover:underline'>
        {title}
      </Link>
      <span style={{ flex: '20%' }} className='text-right'>{`${monthName} ${dayIndex}`}</span>
    </li>
  );
}
