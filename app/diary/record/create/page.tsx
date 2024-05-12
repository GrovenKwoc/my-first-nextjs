import Form from '@/app/ui/record/create-form';
import Breadcrumbs from '@/app/ui/record/breadcrumbs';
import { fetchAllHaters } from '@/app/lib/data';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '新增情绪记录',
};

export default async function Page() {
  const haters = await fetchAllHaters();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: '情绪记录', href: '/diary/record' },
          {
            label: '新增情绪记录',
            href: '/diary/record/create',
            active: true,
          },
        ]}
      />
      <Form haters={haters} />
    </main>
  );
}
