import { read } from './read.js';

// Keep track of app load time so each log message can be timed.
// Log messages should all be approximately 1 second apart.
const startTime = Date.now();
const elapsed = (): string =>
  `${Math.round((Date.now() - startTime) / 1000)}s -`;

async function readOnce(): Promise<void> {
  const msg = await read('foo/bar.html');
  console.log(elapsed(), 'readOnce:', msg);
}

async function readSeveral(): Promise<void> {
  const msg = await read('foo1/bar.html');
  console.log(elapsed(), 'readSeveral1:', msg);

  const msg1 = await read('foo2/bar.html');
  console.log(elapsed(), 'readSeveral2:', msg1);

  const msg2 = await read('foo3/bar.html');
  console.log(elapsed(), 'readSeveral3:', msg2);
}

async function readChained(): Promise<void> {
  const msg = await read('foo-chain/bar.html');
  console.log(elapsed(), 'readChained1:', msg);

  const msg1 = await read(msg);
  console.log(elapsed(), 'readChained2:', msg1);

  const msg2 = await read(msg1);

  console.log(elapsed(), 'readChained3:', msg2);
}

await readOnce();
await readSeveral();
await readChained();
