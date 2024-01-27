import Link from "next/link";
import styles from '@/styles/Home.module.scss';
import { client } from '@/libs/client';

// SSG (refer to the microCMS API)
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  return {
    props: {
      blog: data.contents,
    },
  };
};

// Need to create blog dir in pages dir to put the contents

export default function Home({ blog }) {
  return (
    <div>
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              {blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

