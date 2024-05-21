import { interval, take, lastValueFrom } from 'rxjs';

async function execute() {
  const source$ = interval(2000).pipe(take(10));
  const finalNumber = await lastValueFrom(source$);
  console.log(`The final number is ${ finalNumber }`);
}

execute();

// Expected output:
// 'The final number is 9'