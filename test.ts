import * as path from 'https://deno.land/std@0.99.0/path/mod.ts';

const file = path.join(Deno.cwd(), 'test.js');
console.log(file);

try {
  console.log(await import(file));
} catch (err) {
  console.log(err);
}
