function getSimpleDate(dateObject) {
    return { 
        year: dateObject.getFullYear(),
        month: dateObject.getMonth() + 1,
        day: dateObject.getDate()
    };
}

function getDateObject(simpleDate) {
    return new Date(
        simpleDate.year,
        simpleDate.month - 1,
        simpleDate.day
    );
}

function getNow() {
    return getSimpleDate(new Date());
}

function getTimeDifference(a, b) {
    return getDateObject(a).getTime() - 
        getDateObject(b).getTime();
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

        // remember the time difference
        let timedItem = {
            time: timeDifference,
            item: item
        };

        if (timeDifference >= 0)
            futureItems.push(timedItem);
        else
            pastItems.push(timedItem);
    }

    // Sort the future and past items 
    futureItems.sort((a, b) => a.item - b.item);
    pastItems.sort((a, b) => b.item - a.item);

    // Return them together, future coming first
    let sortedItems = [];
    for (let timedList of [ futureItems, pastItems ]) {
        for (let {_, item} of timedList) {
            sortedItems.push(item);
        }
    }

    return sortedItems;
}
