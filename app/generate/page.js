import GenerateClient from './GenerateClient';

export default function GeneratePage({ searchParams }) {
  // Pass handle from URL search params to client component
  return <GenerateClient initialHandle={searchParams.handle} />;
}