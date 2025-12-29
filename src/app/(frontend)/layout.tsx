import React from 'react'

export const metadata = {
  description: 'Kraeuterakademie API - Admin Only',
  title: 'Kraeuterakademie API',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
