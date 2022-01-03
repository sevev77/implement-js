const Hello1 = {
    greeting: 'hello',
    handshake: () => {}
}
const Hello2 = {
    greeting: 'hello',
    handshake: 'seven'
}
const Introduction = Interface('Introduction')({
    greeting: type('string'),
    handshake: type('function')
}, { error: true })

const HelloIntroduction1 = implement(Introduction)(Hello1)
const HelloIntroduction2 = implement(Introduction)(Hello2)

console.log(HelloIntroduction1);
console.log(HelloIntroduction2);

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
