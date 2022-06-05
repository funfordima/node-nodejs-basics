export const parseArgs = () => {
  const entryString = '--prop';
  const myArgs = process.argv.slice(2);
  const mappedArgs = myArgs.reduce((acc, val, i, arr) => {
    if (val.startsWith(entryString)) {
      const isArgumentsValid = (i < arr.length - 1) && !arr[i + 1].startsWith(entryString);
      return isArgumentsValid ?
        (acc.push(`${val} is ${arr[i + 1]}`), acc) :
        (acc.push(`${val} is undefined`), acc);
    }

    return acc;
  }, []);

  process.stdout.write(mappedArgs.join(', '));
};

parseArgs();
