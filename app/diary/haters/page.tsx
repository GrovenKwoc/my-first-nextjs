import { fetchAllHaters, fetchFilteredHaters } from '@/app/lib/data';
import HatersTable from '@/app/ui/haters/table';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Haters',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    // page?: string;
  };
}) {
  const query = searchParams?.query || '';
  // const currentPage = Number(searchParams?.page) || 1;
  const totalHaters = await fetchFilteredHaters(query);
  return (
    <main>
      <HatersTable haters={totalHaters} />
    </main>
  );
}
