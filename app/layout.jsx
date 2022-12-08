import './tailwind.css'

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <title>🎄 Advent of CSS </title>
            </head>
            <body className="max-w-md-screen-lg mx-auto p-4">{children}</body>
        </html>
    )
}
