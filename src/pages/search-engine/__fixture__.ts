import faker from "faker";

export const users = [...Array(5000)].map(() => faker.name.findName());
