// Challenge #4
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const btn = document.querySelector('button');

// btn.addEventListener('click', function () {
//   // console.log(text.value);
//   const arrayWithTowWords = text.value.trim().toLowerCase().split('_');
//   const textEdited =
//     arrayWithTowWords[0] +
//     arrayWithTowWords[1].replace(
//       arrayWithTowWords[1][0],
//       arrayWithTowWords[1][0].toUpperCase()
//     );
//   console.log(textEdited);
// });
btn.addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const row = text.split('\n');
  for (const e of row) {
    const arr = e.trim().toLowerCase().split('_');
    const output = arr[0] + arr[1].replace(arr[1][0], arr[1][0].toUpperCase());
    console.log(`${output.padEnd(20)}${'✅'.repeat(row.indexOf(e) + 1)}`);
  }
});