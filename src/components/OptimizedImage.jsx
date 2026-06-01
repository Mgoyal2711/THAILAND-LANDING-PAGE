// import { getOptimizedSrc } from '../utils/imagePaths';

// export default function OptimizedImage({
//   src,
//   alt = '',
//   className,
//   loading = 'lazy',
//   decoding = 'async',
//   ...props
// }) {
//   return (
//     <img
//       src={getOptimizedSrc(src)}
//       alt={alt}
//       className={className}
//       loading={loading}
//       decoding={decoding}
//       {...props}
//     />
//   );
// }


import { getOptimizedSrc } from '../utils/imagePaths';

export default function OptimizedImage({
  src,
  alt = '',
  className,
  loading = 'lazy',
  decoding = 'async',
  onError,
  ...props
}) {
  return (
    <img
      src={getOptimizedSrc(src)}
      alt={alt}
      className={className}
      loading={loading}
      decoding={decoding}
      onError={(event) => {
        const originalSrc = new URL(src, window.location.origin).href;

        if (event.currentTarget.src !== originalSrc) {
          event.currentTarget.src = src;
          return;
        }

        onError?.(event);
      }}
      {...props}
    />
  );
}

