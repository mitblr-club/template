import BlogCard from './blogCard/blogCard';

const Blog = () => {
  return (
    <div className="mt-c20 px-0 pb-c3 md:mt-c10 xl:mt-c5 xl:px-c8">
      <div className="text-4xl font-bold">Latest Updates</div>

      <BlogCard />
    </div>
  );
};

export default Blog;
