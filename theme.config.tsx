import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
    useNextSeoProps() {
        const { route } = useRouter()
        if (route !== '/') {
            return {
                titleTemplate: '%s – Fetcch'
            }
        }
    },
    logo: <img src="/logo.svg" />,
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
    darkMode: true,
    primaryHue: 33,
    project: {
        link: 'https://github.com/shuding/nextra-docs-template',
    },
    docsRepositoryBase: 'https://github.com/glitch-afk/fetcch-docs',
    footer: {
        text: <>{new Date().getFullYear()} © Fetcch.</>,
    },
}

export default config
