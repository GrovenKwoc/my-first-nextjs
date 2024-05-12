import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search';
import { FormattedHatersTable } from '@/app/lib/definitions';

export default async function HatersTable({
  haters,
}: {
  haters: FormattedHatersTable[];
}) {
  return (
    <div className="w-full">
      <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
        黑名单贱人
      </h1>
      <Search placeholder="查找贱人..." />
      <div className="mt-6 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">
              <div className="md:hidden">
                {haters?.map((hater) => (
                  <div
                    key={hater.id}
                    className="mb-2 w-full rounded-md bg-white p-4"
                  >
                    <div className="flex items-center justify-between border-b pb-4">
                      <p className="text-sm text-gray-500">{hater.name}</p>
                    </div>
                    <div className="flex w-full items-center justify-between border-b py-5">
                      <div className="flex w-1/2 flex-col">
                        <p className="text-xs">未排解</p>
                        <p className="font-medium">{hater.total_unsolved}</p>
                      </div>
                      <div className="flex w-1/2 flex-col">
                        <p className="text-xs">Paid</p>
                        <p className="font-medium">{hater.total_solved}</p>
                      </div>
                    </div>
                    <div className="pt-4 text-sm">
                      <p>{hater.total_records} invoices</p>
                    </div>
                  </div>
                ))}
              </div>
              <table className="hidden min-w-full rounded-md text-gray-900 md:table">
                <thead className="rounded-md bg-gray-50 text-left text-sm font-normal">
                  <tr>
                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                      贱人名
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      总结仇事件数
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      仍未排解恩怨数
                    </th>
                    <th scope="col" className="px-4 py-5 font-medium">
                      已排解恩怨数
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 text-gray-900">
                  {haters.map((hater) => (
                    <tr key={hater.id} className="group">
                      <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                        <div className="flex items-center gap-3">
                          <p>{hater.name}</p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {hater.total_records}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {hater.total_unsolved}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm group-first-of-type:rounded-md group-last-of-type:rounded-md">
                        {hater.total_solved}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
