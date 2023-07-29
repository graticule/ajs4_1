import getHealthStatus from '../getHealthStatus';

const dataList = [
  ['healthy', { name: 'a', health: 55 }],
  ['wounded', { name: 'a', health: 50 }],
  ['wounded', { name: 'a', health: 25 }],
  ['wounded', { name: 'a', health: 15 }],
  ['critical', { name: 'a', health: 10 }],
];

test.each(dataList)('Test getHealthStatus for %s status', (status, player) => {
  expect(getHealthStatus(player)).toBe(status);
});
