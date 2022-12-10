export default {
  github: 'https://github.com/fetcch/docs',
  docsRepositoryBase: 'https://github.com/fetcch/docs',
  titleSuffix: ' – Fetcch',
  logo: (
    <>
      <span className="mr-4 font-extrabold hidden md:inline">
        <img src="/logo.svg" />
      </span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Documentation for Fetcch
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="apple-mobile-web-app-title" content="Fetcch" />
      <meta
        name="description"
        content="Fetcch Docs: Build the future of world with us"
      />
      <meta
        name="og:description"
        content="Fetcch Docs: Build the future of world with us"
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:image" content="https://docs.fetcch.xyz/og.png" />
      <meta name="twitter:site:domain" content="docs.fetcch.xyz" />
      <meta name="twitter:url" content="https://twitter.com/FetcchX" />
      <meta
        name="og:title"
        content="Fetcch Docs: Build the future of world with us"
      />
      <meta name="og:image" content="https://docs.fetcch.xyz/og.png" />
      <link rel="icon" href="/favicon.ico" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: false,
  font: false,
  footerText: <>{new Date().getFullYear()} © Fetcch.</>,
  unstable_faviconGlyph: '👋',
}
