import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description, keywords, canonicalPath }) => {
  const location = useLocation();

  useEffect(() => {
    const siteUrl = "https://dhirajshah.in";
    const currentPath = canonicalPath || location.pathname;
    const fullUrl = `${siteUrl}${currentPath === '/' ? '' : currentPath}`;

    // Update document title
    if (title) {
      document.title = title;
    }

    // Helper to set or create meta tag
    const setMetaTag = (nameAttr, nameValue, content) => {
      if (!content) return;
      let element = document.querySelector(`meta[${nameAttr}="${nameValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(nameAttr, nameValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper to set or create link tag
    const setLinkTag = (rel, href) => {
      if (!href) return;
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // Update meta tags
    if (description) {
      setMetaTag('name', 'description', description);
      setMetaTag('property', 'og:description', description);
      setMetaTag('name', 'twitter:description', description);
    }

    if (keywords) {
      setMetaTag('name', 'keywords', keywords);
    }

    if (title) {
      setMetaTag('property', 'og:title', title);
      setMetaTag('name', 'twitter:title', title);
    }

    // Update canonical and Open Graph URL
    setLinkTag('canonical', fullUrl);
    setMetaTag('property', 'og:url', fullUrl);

  }, [title, description, keywords, canonicalPath, location.pathname]);

  return null;
};

export default SEO;
