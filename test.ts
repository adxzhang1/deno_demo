import * as path from 'https://deno.land/std@0.99.0/path/mod.ts';

const file = path.join(Deno.cwd(), 'test.js');

console.log(await import(file));
