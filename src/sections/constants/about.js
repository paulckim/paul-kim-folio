const TAB_IDS = Object.freeze({
  BIOGRAPHY: 0,
  STATS: 1,
  HOBBIES: 2
});

const TAB_LITERALS = Object.freeze([
  'Biography', 'Stats', 'Hobbies'
]);

/**
 * 
 * @param {number} id 
 */
const getTabLabels = id => TAB_LITERALS[id];

export {
  TAB_IDS,
  getTabLabels
}
