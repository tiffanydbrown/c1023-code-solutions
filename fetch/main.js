async function logData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) throw new Error(`fetch Error ${response.status}`);
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error('fetch failed!', err);
  }
}
logData();
