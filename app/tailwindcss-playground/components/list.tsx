import Image from 'next/image';

async function fetchPets(url: string) {
  const response = await fetch(url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'same-origin', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    // body: JSON.stringify(data), // body data type must match "Content-Type" header
  });

  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return response.json();
}

export async function List() {
  const res = await fetchPets(
    'http://127.0.0.1:4523/m1/4277651-3919651-default/pets',
  );

  return (
    <main className="grid grid-cols-4 grid-rows-4 gap-2">
      {res.data.map((pet) => {
        if (pet) {
          const picUrl = pet.photoUrls[0];
          const widthIdx = picUrl.lastIndexOf('/');
          const heightIdx = picUrl.lastIndexOf('x');
          const width = picUrl.substring(widthIdx + 1, heightIdx);
          const height = picUrl.substring(heightIdx + 1);
          return (
            <div
              key={pet.id}
              className="divide-y
              rounded-lg bg-gray-200 p-4
              hover:p-2 hover:ring-inset hover:ring-2 hover:ring-green-200" 
            >
              <Image
                className="h-52 w-52 object-contain"
                src={picUrl}
                alt="dog"
                width={width}
                height={height}
              />
              <p>{pet.id}</p>
              <p>category</p>
              <p>{pet.name}</p>
              <p>tags</p>
              <p>status:{pet.status}</p>
            </div>
          );
        } else {
          return;
        }
      })}
    </main>
  );
}
