import { client } from '@/libs/client';
import styles from "../../styles/Home.module.scss";
// SSG
export const getStaticProps = async (context) => {
    // 1. need to get the each blog id to ensure the URL
    const id = context.params.id;
    const data = await client.get({ endpoint: "blog", contentId: id });
    
    return {
        props: {
            blog: data,
        },
    };
};

// Need to clarify which page Link you want to open for the dynamic pages
export const getStaticPaths = async () => {
    const data = await client.get({ endpoint: "blog" });
    const paths = data.contents.map((content) => `/blog/${content.id}`);

    return {
        paths, fallback: false
    };
};

export default function blogId ({ blog }) {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>{blog.title}</h1>
            <p className={styles.publishedAt}>{blog.publishedAt}</p>
            <div dangerouslySetInnerHTML={{__html: `${blog.body}`}} className={styles.post}></div>
        </main>
    )
};

    