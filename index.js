module.exports = {
  before: config => {
    global.__DEBUG_MODE__ = false;
    global.__MOCK__ = false;
    global.__CLIENT__ = true;
    global.__SERVER__ = false;
  } 
};
