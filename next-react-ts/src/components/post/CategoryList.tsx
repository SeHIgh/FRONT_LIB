// components/CategoryList.tsx
import { categoryList } from "config/post";
import Link from "next/link";

const CategoryList = ({list}) => {
    return (
        <div>
            {list.map((category) => (
                <Link key={category} href={`/blog/${category}`}>
                    <a>{category}</a>
                </Link>
            ))}
        </div>
    );
};

export default CategoryList;