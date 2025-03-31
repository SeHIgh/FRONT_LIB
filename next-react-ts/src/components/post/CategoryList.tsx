// components/CategoryList.tsx
import Link from 'next/link';

interface CategoryListProps {
  list: Array<{
    name: string;
    count: number;
  }>;
  currentCategory?: string;
}

export default function CategoryList({ list, currentCategory }: CategoryListProps) {
  return (
    <nav className="flex gap-4 flex-wrap">
      <Link 
        href="/blog"
        className={`category-item px-4 py-2 rounded-lg text-sm ${
          !currentCategory ? 'bg-gray-600 text-white' : 'bg-gray-100'
        }`}
      >
        전체
      </Link>
      {list.map((category) => (
        <Link
          key={category.name}
          href={`/blog/${category.name}`}
          className={`category-item px-4 py-2 rounded-lg ${
            currentCategory === category.name ? 'bg-gray-600 text-white' : 'bg-gray-100'
          }`}
        >
          {category.name} ({category.count})
        </Link>
      ))}
    </nav>
  );
}