import faker from "faker";

export const getUsers = (n: number): Array<string> =>
  [...Array(n)].map(() => faker.name.findName()).sort();
