// Add the <Toaster /> to your root layout (app/layout.tsx)
// so toasts can be triggered from anywhere in the app.

import type { Metadata } from 'next'
import { Toaster } from '@/components/ui/sonner'

export const metadata: Metadata = {
  title: 'Ardell Living',
  description: 'Supporting lives. Building futures.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
