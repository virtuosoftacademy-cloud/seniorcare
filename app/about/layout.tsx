

export const metadata = {
    title: 'About Ardell Living | Our Mission & Values',
    description: 'Learn about Ardell Living\'s housing-led supported living approach, our mission to support vulnerable adults, and our core values of dignity, independence, and compassionate care.',
}

export default function AboutLayout({
    children,
}: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen">
            {children}
        </div>
    )
}