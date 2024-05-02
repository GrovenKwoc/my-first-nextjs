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
    <main className="grid grid-cols-4 gap-4">
      {res.data.map((pet) => pet?(
        <div key={pet.id}>
          <p>{pet.name}</p>
          <p>category</p>
          <p>{pet.name}</p>
          <Image src={pet.photoUrls[0]} alt="dog" width={100} height={100} />
          <p>tags</p>
          <p>status:{pet.status}</p>
        </div>
      ):pet)}
    </main>
  );
}
