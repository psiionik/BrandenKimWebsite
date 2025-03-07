import React from 'react'
import localFont from 'next/font/local'

const app_fonts = localFont({
    src: [
        {
            path: '../../public/fonts/runescape.woff2',
            style: 'normal',
        },
        {
            path: '../../public/fonts/runescape_bold.woff2',
            style: 'bold',
        },
    ]
})

export default function layout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={app_fonts.className}>
            <body>{children}</body>
        </html>
    )
}