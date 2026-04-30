
export const metadata = {
  title: 'Our Partners | Ardell Living',
  description: 'Discover the strategic partnerships and collaborations that support Ardell Living\'s mission to provide excellent housing-led supported living services.',
}

export default function PartnersLayout({
    children,
}: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen">
            {children}
        </div>
    )
}