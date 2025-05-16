import Link from 'next/link';

export default function SwitchLink({ text, href, label }: {
  text: string;
  href: string;
  label: string;
}) {
  return (
    <p className="mt-4 text-sm text-center">
      {text}{' '}
      <Link href={href} className="text-blue-600 hover:underline">
        {label}
      </Link>
    </p>
  );
}
