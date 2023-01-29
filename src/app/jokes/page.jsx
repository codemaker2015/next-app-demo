async function getData() {
  const res = await fetch(
    "https://v2.jokeapi.dev/joke/Programming?type=single&amount=10"
  );
  return res.json();
}

export default async function Page() {
  const data = await getData();
  return (
    <div>
      <h2>Tell me a joke</h2>
      <hr />
      <ul>
        {data &&
          data?.jokes?.map((item, index) => {
            return <li>{item?.joke}</li>;
          })}
      </ul>
      {data.joke}
    </div>
  );
}
