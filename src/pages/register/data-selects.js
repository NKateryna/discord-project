const dataSelects = {
  day: [],
  month: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  year: [],
};

function createSelects() {
  let today = new Date();
  let yearToday = today.getFullYear();
  for (let i = 1; i <= 31; i++) {
    dataSelects.day.push(i);
  }
  for (let i = yearToday - 3; i >= yearToday - 152; i--) {
    dataSelects.year.push(i);
  }
}
createSelects();

export default dataSelects;
