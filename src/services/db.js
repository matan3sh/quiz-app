const gDefaultContacts = [
  {
    id: 'GXj93KOkqZoC',
    question: 'Which City Is The Best?',
    options: ['Los Angeles', 'New York', 'Boston', 'Las Vegas'],
    answer: 0,
  },
  {
    id: 'JYOJa2NpSCq',
    question: '2020 NBA Champions?',
    options: ['Celtics', 'Lakers', 'Clippers', 'Spurs'],
    answer: 1,
  },
  {
    id: '1y0Oqts35DQ',
    question: 'Best Netflix Series?',
    options: ['Casa De Papel', 'Lotsifer', 'Last Dance', 'Dark'],
    answer: 2,
  },
  {
    id: 'kSnfIJyikTP',
    question: 'Best Javascript Framework?',
    options: ['Angular', 'Vue', 'Node', 'React'],
    answer: 3,
  },
];

function getDefaultData() {
  return gDefaultContacts;
}

export default {
  getDefaultData,
};
