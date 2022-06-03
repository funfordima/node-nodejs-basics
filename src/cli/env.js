export const parseEnv = () => {
  const envVariables = Object.entries(process.env);
  const filterByParam = (data) => data.startsWith('RSS_');
  const filteredList = envVariables.filter((entry) => entry.find(filterByParam));
  const mappedValues = filteredList.map((entry) => entry.join('='));

  process.stdout.write(mappedValues.join(' '));
};

parseEnv();
