 const input = process.argv.slice(2);

const timer = (input) => {
for (let elements of input) {

  if (Number(elements) > 0 && (!isNaN(elements))) {
    setTimeout(() => {
      process.stdout.write('\007');
    }, Number(elements * 1000))
  } else {
    process.exit()
  }
}
}
timer(input)