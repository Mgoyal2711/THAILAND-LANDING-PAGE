const BASE = import.meta.env.BASE_URL;

export function getOptimizedSrc(src) {
  if (!src) return src;

  if (src.startsWith('http') || src.startsWith(BASE)) {
    return src;
  }

  const cleanSrc = src.startsWith('/')
    ? src.slice(1)
    : src;

  return `${BASE}${cleanSrc}`;
}
