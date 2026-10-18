import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import blogIndex from '@/assets/json/blog.json';

const SITE_URL = 'https://hamza.im';

interface BlogPostMeta {
  file: string;
  title: string;
  slug: string;
  categories: string[];
  description: string;
  published_at: string;
}

const posts = blogIndex as BlogPostMeta[];

interface PageMeta {
  title: string;
  description: string;
  path: string;
}

const staticMeta: Record<string, PageMeta> = {
  '/': {
    title: 'Hamza Jarane — Software Developer',
    description:
      'Portfolio of Hamza Jarane, a software developer from Morocco specializing in TypeScript, JavaScript, Kotlin, PHP, React, Laravel, Next.js, and DevOps. Explore my work, blog, and download my resume in English or French.',
    path: '/',
  },
  '/blog': {
    title: 'Blog — Hamza Jarane',
    description:
      'Articles by Hamza Jarane on self-hosting, open-source tools, DevOps, networking, and programming.',
    path: '/blog',
  },
  '/work': {
    title: 'Work & Experience — Hamza Jarane',
    description:
      'Professional experience, projects and open-source contributions by Hamza Jarane, software developer.',
    path: '/work',
  },
  '/contact': {
    title: 'Contact — Hamza Jarane',
    description:
      'Get in touch with Hamza Jarane. Email, GitHub, LinkedIn and resume downloads in English and French.',
    path: '/contact',
  },
};

const setMetaContent = (selector: string, value: string) => {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute('content', value);
};

const setLinkHref = (rel: string, href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"][data-seo]`);
  if (!el) {
    el = document.createElement('link');
    el.rel = rel;
    el.setAttribute('data-seo', 'true');
    document.head.appendChild(el);
  }
  el.href = href;
};

const upsertJsonLd = (id: string, data: object) => {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement('script');
    el.id = id;
    el.type = 'application/ld+json';
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
};

export const getPageMetaByPath = (path: string): PageMeta | undefined => {
  if (staticMeta[path]) return staticMeta[path];

  if (path.startsWith('/blog/')) {
    const slug = path.replace('/blog/', '');
    const post = posts.find((p) => p.slug === slug);
    if (post) {
      return {
        title: `${post.title} — Hamza Jarane`,
        description: post.description,
        path,
      };
    }
  }
  return undefined;
};

export const useSeo = (): void => {
  const location = useLocation();
  const meta = getPageMetaByPath(location.pathname) ?? staticMeta['/'];

  useEffect(() => {
    document.title = meta.title;
    setMetaContent('meta[name="description"]', meta.description);
    setMetaContent('meta[property="og:title"]', meta.title);
    setMetaContent('meta[property="og:description"]', meta.description);
    setMetaContent('meta[property="og:url"]', `${SITE_URL}${meta.path}`);
    setLinkHref('canonical', `${SITE_URL}${meta.path}`);

    if (meta.path.startsWith('/blog/') && meta.path !== '/blog') {
      const slug = meta.path.replace('/blog/', '');
      const post = posts.find((p) => p.slug === slug);
      if (post) {
        setMetaContent('meta[property="og:type"]', 'article');
        upsertJsonLd('jsonld-blog', {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.description,
          datePublished: post.published_at,
          url: `${SITE_URL}/blog/${post.slug}`,
          author: { '@id': `${SITE_URL}/#person` },
          keywords: (post.categories || []).join(', '),
        });
      }
    } else {
      setMetaContent('meta[property="og:type"]', 'website');
      const blogLd = document.getElementById('jsonld-blog');
      if (blogLd) blogLd.remove();
    }
  }, [meta]);
};
