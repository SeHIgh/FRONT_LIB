import CategoryList from "@/components/post/CategoryList";
import { PostCard } from "@/components/post/PostCard";
import { getCategoryDetailList, getPostList } from "utils/postfunc";

export const PostListPage = async ({ category }) => {
    const postList = await getPostList(category);
    const categoryList = await getCategoryDetailList();
   
    return (
      <section>
        <CategoryList list={categoryList} />
        <section>
          <ul>
            {postList.map((post) => (
              <PostCard key={post.url + post.date} post={post} />
            ))}
          </ul>
        </section>
      </section>
    );
  };