// TO IMPORT FOR SIDEFFECTS: 
// import 'object';
// use an object in this file, instead of importing
// another module to avoid awaits
const ObjectFuncs = {

    // TODO: after i make sure all these work
    // try to use them in each other

    'map': function(callback) {
        let mapped = [], i = 0;

        for (let key in this) {
            if (this.hasOwnProperty(key)) {
                let value = this[key];
                mapped.push(callback(key, value, i++));
            }
        }

        return mapped;
    },

    'iterable': function* () {
        for (let key in this) {
            if (this.hasOwnProperty(key)) {
                let value = this[key];
                yield [ key, value ];
            }
        }
    }
    
};

// THIS TURNED OUT TO CAUSE A TYPE ERROR WITH webpack in node_modules:
// Special edge case for Symbol.iterator
// Object.prototype[Symbol.iterator] = function*() {
//     for (let key in this) {
//         let value = this[key];
//         yield [ key, value ];
//     }
// };

for (let name in ObjectFuncs) {
    let func = ObjectFuncs[name];

    // use defineProperty, writable: true, and enumerable: false 
    // to avoid problems with  react ( as opposed to prototype[...] = ()=>{} )
    Object.defineProperty(Object.prototype, name, { 
        value: func,
        writable: true,
        enumerable: false
    });
}