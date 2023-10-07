'use client';

import { Providers } from '@/lib';

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout(props: RootLayoutProps) {
  return (
      <html lang="en">
        <body>
          <Providers>
            {props.children}
          </Providers>
        </body>
      </html>
  )
}

