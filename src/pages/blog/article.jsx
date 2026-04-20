import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { blogPosts } from "../../data/blogData";

export default function Article() {
  const { slug } = useParams();

  const post = blogPosts.find((item) => item.slug === slug);
  const relatedPosts = blogPosts.filter((item) => item.slug !== slug).slice(0, 3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-black px-4 text-white">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-white/35">
            404
          </p>
          <h1 className="mt-4 text-3xl font-medium">Article not found</h1>
          <Link
            to="/blog"
            className="mt-8 inline-flex border border-white/15 bg-white px-6 py-3 text-[11px] uppercase tracking-[0.35em] text-black transition hover:bg-white/90"
          >
            Back to Blog
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-black px-4 py-25 text-white md:px-10 lg:px-20">
      <div className="mx-auto max-w-5xl">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.35em] text-white/45 transition hover:text-white"
        >
          ← Back to Blog
        </Link>

        <div className="mt-10">
          <h1 className="mt-5 max-w-4xl text-4xl font-medium tracking-tight text-white sm:text-5xl md:text-6xl">
            {post.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-[11px] uppercase tracking-[0.25em] text-white/40">
            <span>{post.date}</span>
            <span>{post.production}</span>
          </div>
        </div>

        <div className="mt-10 overflow-hidden border border-white/10">
          <img
            src={post.image}
            alt={post.title}
            className="h-80 w-full object-cover md:h-130"
          />
        </div>

        <div className="mt-12 max-w-3xl">
          <p className="text-lg leading-relaxed text-white/70 md:text-xl">
            {post.description}
          </p>

          <div className="mt-10 space-y-7">
            {post.content.map((paragraph, index) => (
              <p
                key={index}
                className="text-sm leading-relaxed text-white md:text-base md:leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {relatedPosts.length > 0 && (
          <div className="mt-20 border-t border-white pt-12">
            <div className="mb-8">
              <p className="text-[11px] uppercase tracking-[0.45em] text-white/35">
                More Articles
              </p>
              <h2 className="mt-3 text-2xl font-medium tracking-tight text-white md:text-3xl">
                Related Posts
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
              {relatedPosts.map((item) => (
                <Link
                  key={item.id}
                  to={`/blog/${item.slug}`}
                  className="group overflow-hidden border border-white bg-white/2 transition duration-300 hover:border-white/20"
                >
                  <div className="overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-60 w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="p-5">
                    <div className="mb-3 text-[11px] uppercase tracking-[0.25em] text-white/40">
                      {item.date}
                    </div>

                    <h3 className="text-xl font-medium tracking-tight text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-white/65">
                      {item.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}