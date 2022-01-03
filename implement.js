
const Introduction = Interface('Introduction')({
    greeting: type('string'),
    handshake: type('function')
}, { error: true });

function Interface(name) {
  return (schema) => {
    return schema;
  };
}
function implement(Interface) {
  return (obj) => {
    let hasError = false;

    Object.keys(Interface).forEach((item, i) => {
      if (typeof obj[item] !== Interface[item] ) {
        throw new Error(`You should implement ${item} with ${Interface[item]}`);
        hasError = true;
      }
    });

    return !hasError && obj;
  };
}
function type(value) {
  return value;
}
