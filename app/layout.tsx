import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Instrument_Serif } from 'next/font/google'
import { siteDescription, siteKeywords, siteName, siteTitle, siteUrl } from '@/lib/seo'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | SNS Education`,
  },
  description: siteDescription,
  keywords: siteKeywords,
  applicationName: 'SNS Education',
  authors: [{ name: 'SNS Education', url: siteUrl }],
  creator: 'SNS Education',
  publisher: 'SNS Education',
  category: 'education',
  generator: 'v0.app',
  alternates: {
    canonical: '/',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: siteTitle,
    description:
      'Estude na Parul University com bolsa de 50% e sem taxa de agência. Acompanhamento completo do Offer Letter até à chegada ao campus.',
    url: '/',
    siteName,
    locale: 'pt_MZ',
    alternateLocale: ['pt_PT', 'pt_BR'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description:
      'Estude na Parul University com bolsa de 50% e sem taxa de agência. Acompanhamento completo até à chegada.',
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f9f6ef',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
