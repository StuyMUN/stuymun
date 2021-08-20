function getSimpleDate(dateObject) {
    return { 
        year: dateObject.getFullYear(),
        month: dateObject.getMonth() + 1,
        day: dateObject.getDate()
    };
}

function getNowRaw() {
    return new Date(Date.now());
}

function getNow() {
    return getSimpleDate(getNowRaw());
}

function getTimeDifference(a, b) {
    
    function getSeconds(d) {
        return new Date(
            d.year,
            d.month - 1,
            d.day
        ).getTime();
    }

    return getSeconds(a) - getSeconds(b);
}


/**
 * items - contains a list of items, in which each item should contain 
 *  a date in the layout { year: int, month: int, day: int }
 * 
 * options - 
 *  getDate - given an item, retrieves its date
 *  now - what the current date is (in the above format),
 * 
 * returns the items sorted around now, 
 *  the items closest to now, but after now come first
 *  the items before now are after the items that come after now are at the end of the list
 */
export function sortByDate(items, options) {
    // Sanitize options
    options.getDate = options.getDate || (e => e);
    options.now = options.now || getNow();
    options.getTimeDifference = e => {
        return getTimeDifference(options.getDate(e), options.now);
    };

    // Decide if the items are in the future or past
    let futureItems = [],
        pastItems = [];

    for (let item of items) {
        const timeDifference = options.getTimeDifference(item);

        if (timeDifference >= 0)
            futureItems.push(item);
        else
            pastItems.push(item);
    }

    // Sort the future and past items 

    // (for now, the time difference is recalculated, but this can easily
    // be changed in the for loop by created a timedItem object with both
    // the time difference and the item, and then using that to sort here, 
    // and then returning a list of only the item and not the time)
    function compareItems(a, b) {
        return options.getTimeDifference(a) - 
            options.getTimeDifference(b);
    }

    futureItems.sort(compareItems);
    pastItems.sort((a, b) => -compareItems(a, b));

    // Return them together, future coming first
    return [...futureItems, ...pastItems];
}
