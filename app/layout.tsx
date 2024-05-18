import type { Metadata } from 'next'
import { ThemeProvider } from '@/theme'
import './globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s | Team Aggregation',
    default: 'Team Aggregation',
  },
  description: 'Team Aggregation',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
