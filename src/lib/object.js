// TO IMPORT FOR SIDEFFECTS: 
// import 'object';

class Iterator {
    constructor(object, callback) {
        this.object = object;
        this.callback = callback;
    }

    *[Symbol.iterator]() {
        let i = 0;
        for (let key in this.object) {
            if (this.object.hasOwnProperty(key)) {
                let value = this.object[key];
                yield (this.callback([key, value], i++));
            }
        }
    }

    collect(container=[]) {
        for (let item of this) {
            container.push(item);
        }
        return container;
    }

    // i can also add the map function here (it's on the object)
}

// use an object in this file, instead of importing
// another module to avoid awaits
const ObjectFuncs = {

    // TODO: after i make sure all these work
    // try to use them in each other

    'map': function (callback) {
        return new Iterator(this, callback).collect()
    },

    'entries': function () {
        return new Iterator(
            this,
            (entry, _i) => entry
        );
    },

    'keys': function () {
        return new Iterator(
            this,
            ([key, _], _i) => key
        );
    },

    'values': function () {
        return new Iterator(
            this,
            ([_, value], _i) => value
        );
    }

};

// THIS TURNED OUT TO CAUSE A TYPE ERROR WITH webpack in node_modules:
// Special edge casein for Symbol.iterator
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