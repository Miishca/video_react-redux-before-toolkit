import { wait } from './wait';

export const fetchGoods = async () => {
  await wait(1000);
  return ['A', 'B', 'C'];
};
