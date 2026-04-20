import { Link } from "react-router-dom";
import { blogPosts } from "../../data/blogData";

export default function Blog() {
  return (
    <section className="min-h-screen bg-black px-4 py-16 text-white md:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <h1 className="mt-4 text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl">
            Blog
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/60 md:text-base">
            Thoughts, insights, and visual notes around storytelling, design,
            motion, and creative direction.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((blog) => (
            <Link
              key={blog.id}
              to={`/blog/${blog.slug}`}
              className="group overflow-hidden border border-white bg-white/2 transition duration-300 hover:border-white/20"
            >
              <div className="overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-80 w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                />
              </div>

              <div className="p-6">
                <div className="mb-4 flex items-center justify-between gap-4 text-[11px] uppercase tracking-[0.25em] text-white/40">
                  <span>{blog.date}</span>
                  <span>{blog.production}</span>
                </div>

                <h2 className="text-2xl font-medium tracking-tight text-white">
                  {blog.title}
                </h2>

                <p className="mt-4 text-sm leading-relaxed text-white/65 md:text-base">
                  {blog.description}
                </p>

                <div className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-white/70 hover:text-[#ffffff]">
                  Read More
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}