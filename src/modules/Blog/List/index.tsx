import Image from 'next/image';
import Link from 'next/link';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardFooter, CardHeader} from '@/components/ui/card';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

export default function BlogList() {
  // This would typically come from a database or API
  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with React',
      author: 'Jane Doe',
      date: '2023-06-15',
      description:
        'Learn the basics of React and start building your first app.',
      image: '/placeholder.svg?height=200&width=300',
    },
    {
      id: 2,
      title: 'Advanced TypeScript Techniques',
      author: 'John Smith',
      date: '2023-06-10',
      description:
        'Dive deep into TypeScript and learn advanced concepts and patterns.',
      image: '/placeholder.svg?height=200&width=300',
    },
    {
      id: 3,
      title: 'Mastering CSS Grid',
      author: 'Emily Johnson',
      date: '2023-06-05',
      description:
        'Unlock the power of CSS Grid to create complex layouts with ease.',
      image: '/placeholder.svg?height=200&width=300',
    },
    // Add more blog posts as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Latest Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map(post => (
          <Card key={post.id} className="flex flex-col">
            <CardHeader className="p-0">
              <Image
                src={post.image}
                alt={post.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardContent className="flex-grow p-4">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-sm text-gray-500 mb-2">
                By {post.author} | {post.date}
              </p>
              <p className="text-gray-700 mb-4">{post.description}</p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button asChild>
                <Link href={`/blog/${post.id}`}>More Details</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="mt-8">
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
  );
}
