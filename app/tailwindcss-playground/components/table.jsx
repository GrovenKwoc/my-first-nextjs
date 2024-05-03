import { fetchPets } from './list.jsx';
import Image from 'next/image';

export function Images({ urls }) {
  return (
    <div className="flex flex-row justify-center -space-x-3 p-2">
      {urls.map((url, index) => {
        const widthIdx = url.lastIndexOf('/');
        const heightIdx = url.lastIndexOf('x');
        const width = url.substring(widthIdx + 1, heightIdx);
        const height = url.substring(heightIdx + 1);
        return (
          <Image
            className="h-10 w-10 rounded-full hover:sepia"
            src={url}
            alt="test"
            key={index}
            width={width}
            height={height}
          />
        );
      })}
    </div>
  );
}

export function Tags({ tags }) {
  return (
    <div className="p-2 text-xs truncate space-x-2 overflow-hidden">
      {tags.map((tag, index) => (
        <span
          className="hover:odd:text-pink-300 hover:even:text-red-300 text-nowrap"
          key={index}
        >
          {tag.name}
        </span>
      ))}
    </div>
  );
}

export async function MyTable() {
  const res = await fetchPets();
  const headers = res.data[0] ? Object.keys(res.data[0]) : [];
  return (
    <table className="mt-20 table-fixed border bg-slate-100 shadow-md">
      <caption className="caption-top">
        Table 3.1: Professional wrestlers and their signature moves.
      </caption>
      <thead>
        <tr>
          {headers.map((h) => (
            <th key={h} className="border border-slate-300">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {res.data.map((row) => {
          return (
            <tr key={row.id}>
              <td className="border border-slate-300 w-1/6">{row.id}</td>
              <td className="border border-slate-300 w-1/12">{row.category.name}</td>
              <td className="border border-slate-300 w-1/12">{row.name}</td>
              <td className="border border-slate-300 w-1/6">
                <Images urls={row.photoUrls} />
              </td>
              <td className="w-1/3 border border-slate-300">
                <Tags tags={row.tags} />
              </td>
              <td className="border border-slate-300 w-1/12">{row.status}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
