/* exported truncate */
function truncate(length, string) {
  const str = string;
  const truncatedStr = str.substring(0, length) + '...';
  return truncatedStr;
}
console.log(truncate(8, 'All Code All Day'));
