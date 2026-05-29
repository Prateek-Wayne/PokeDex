import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Feedback',
  description: 'Send feedback, report bugs, or request features for PokeDex.',
  alternates: {
    canonical: '/feedback',
  },
  openGraph: {
    title: 'Feedback',
    description: 'Send feedback, report bugs, or request features for PokeDex.',
  },
};

export default function FeedbackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
