import React from 'react';
import { motion } from 'framer-motion';

const BlogPage = () => {
  const posts = [
    { id: 1, title: 'The Future of AI in Enterprise Software', category: 'Technology', date: 'May 07, 2026', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 2, title: 'How Cloud Migration Impacts Business Scalability', category: 'Cloud', date: 'May 05, 2026', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 3, title: 'Top 5 Cybersecurity Trends for Indian Businesses', category: 'Security', date: 'May 01, 2026', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 4, title: 'UI/UX Best Practices for 2026', category: 'Design', date: 'April 28, 2026', image: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 5, title: 'Digital Marketing Strategies that actually work', category: 'Marketing', date: 'April 25, 2026', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 6, title: 'React vs Flutter for your next mobile app', category: 'Dev', date: 'April 20, 2026', image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  ];

  return (
    <div className="pt-32 pb-24 bg-offwhite min-h-screen">
      <section className="container mx-auto px-6 mb-12">
        <div className="max-w-3xl text-center mx-auto mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-heading font-bold mb-6 text-navy"
          >
            Our <span className="text-electric">Insights</span>
          </motion.h1>
          <p className="text-xl text-navy/60">
            Expert opinions, news, and guides on everything tech.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer bg-white p-4 rounded-3xl border border-black/5 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-2xl mb-6 relative">
                <img
                  src={post.image}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  alt={post.title}
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-electric text-white font-bold text-[10px] rounded uppercase">
                  {post.category}
                </div>
              </div>
              <span className="text-navy/40 text-sm mb-2 block">{post.date} • 5 min read</span>
              <h3 className="text-xl font-heading font-bold mb-4 text-navy group-hover:text-electric transition-colors">
                {post.title}
              </h3>
              <div className="flex items-center text-electric text-sm font-bold gap-2">
                Read Article →
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
