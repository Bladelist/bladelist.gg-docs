export default {
  github: 'https://github.com/shuding/nextra',
  docsRepositoryBase: 'https://github.com/shuding/nextra/blob/master',
  titleSuffix: ' – Bladelist.gg',
  logo: (
    <>
      <img style={{ height: "45px" }} src="https://cdn.discordapp.com/attachments/645283205003476995/969968768161820712/f216e9bcc9efd0ebeeacc3dbcf39e5c1.webp" />
      <strong>
        <span className="text-gray-600 font-normal hidden md:inline">
          Bladelist.gg
        </span>
      </strong>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Bladelist.gg docs." />
      <meta name="og:description" content="Bladelist.gg docs." />
      <meta name="og:title" content="Bladelist.gg docs." />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Want to help us? Edit this page on GitHub',
  footerText: <>MIT {new Date().getFullYear()} © Bladelist.gg.</>,
}
