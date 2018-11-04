const ActionTypes = {
  LOGIN: 'LOGIN',
  GET_STAFF: 'GET_STAFF',
  UPDATE_STAFF: 'UPDATE_STAFF',
  FETCH_DATA: 'FETCH_DATA'
}

const staffList = [
  { text: 'CMS', value: 50 },
  { text: 'AMS', value: 30 },
  { text: 'NGW', value: 20 },
  { text: 'OTT', value: 10 },
  { text: 'PS', value: 10 }
];

const chartConfig = {
  margin: { top: 20, right: 20, bottom: 30, left: 40 },
  width: 500,
  height: 500
};

export {
  ActionTypes,
  staffList,
  chartConfig
}
