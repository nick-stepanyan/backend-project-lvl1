const arrGenerate = () => {
  const taskArray = [];
  for (let i = 0; i < 3; i += 1) {
    const number = String(Math.floor(Math.random() * (100)));
    const answer = (number % 2 === 0) ? 'yes' : 'no';
    taskArray.push([number, answer]);
  }
  return taskArray;
};

export default arrGenerate();
