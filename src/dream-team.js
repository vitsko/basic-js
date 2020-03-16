module.exports = function createDreamTeam(members) {
  if(typeof(members) !== 'object' || !Array.isArray(members)) {
    return false;
  }
  
  return members.filter((member) => {
    return typeof member === 'string'
  })
  .map((name) => {
    name = name.toUpperCase();

    for(let i = 0; i < name.length; ++i) {
      if(name[i] >= 'A' && name[i] <= 'Z') {
        return name[i];
      }
    }
  })
  .sort().join('');
};