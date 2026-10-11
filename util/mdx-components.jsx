// MDX component provider for build-time precompiled posts
// (scripts/compile-mdx.mjs sets providerImportSource to this module).
// Must NOT be 'use client' — the server cannot call client-module functions
// during SSR.
export function useMDXComponents() {
  return {}
}

export default {}
