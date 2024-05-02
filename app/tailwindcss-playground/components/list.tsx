export async function List(){
    await fetch("http://127.0.0.1:4523/m1/4277651-3919651-default/pets")
  .then((response) => response.json())
  .then((data) => ({
    
  }));

    return (
        <main className="grid grid-cols-4 gap-4">
        </main>
    )
}