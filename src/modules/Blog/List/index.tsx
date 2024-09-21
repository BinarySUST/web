import Image from 'next/image';
import Link from 'next/link';
import {CalendarIcon, ArrowRightIcon} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

const articles = [
  {
    id: 1,
    title: 'How to quickly deploy a static website',
    description:
      'Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.',
    category: 'Tutorial',
    date: '5 mins ago',
    readTime: '5 min read',
    author: {
      name: 'Jese Leos',
      avatar:
        'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png',
    },
  },
  {
    id: 2,
    title: 'Mastering CSS Grid Layout',
    description:
      'Learn how to create complex and responsive layouts using CSS Grid. This powerful layout system allows for more flexible and dynamic designs.',
    category: 'CSS',
    date: '1 day ago',
    readTime: '7 min read',
    author: {
      name: 'Sarah Johnson',
      avatar:
        'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png',
    },
  },
  {
    id: 3,
    title: 'Introduction to React Hooks',
    description:
      'Dive into the world of React Hooks and learn how they can simplify your components and make your code more reusable and easier to understand.',
    category: 'React',
    date: '21 days ago',
    readTime: '10 min read',
    author: {
      name: 'Mike Chen',
      avatar:
        'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png',
    },
  },
  {
    id: 4,
    title: 'Optimizing Website Performance',
    description:
      "Explore various techniques to improve your website's loading speed and overall performance. Learn about caching, lazy loading, and more.",
    category: 'Performance',
    date: '2023-05-30',
    readTime: '8 min read',
    author: {
      name: 'Emma Watson',
      avatar:
        'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png',
    },
  },
];

export default function BlogList() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Blog Articles
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Read the latest articles from our blog and stay up to date with the
            latest trends and technologies.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {articles.map(article => (
            <article
              key={article.id}
              className="border dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col h-full">
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-4">
                  <span className="border text-xs font-medium px-2.5 py-0.5 rounded">
                    {article.category}
                  </span>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                    <CalendarIcon className="w-4 h-4 mr-1" />
                    <span>{article.date}</span>
                  </div>
                </div>
                <h2 className="mb-2 text-2xl font-bold tracking-tight">
                  <Link href="#" className="">
                    {article.title}
                  </Link>
                </h2>
                <p className="mb-5 font-light text-gray-400 flex-grow">
                  {article.description}
                </p>
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center space-x-4">
                    <Image
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full"
                      src={article.author.avatar}
                      alt={`${article.author.name} avatar`}
                    />
                    <div className="font-medium dark:text-white">
                      <div>{article.author.name}</div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="">
                    Read more
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
}
