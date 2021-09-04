import path from 'path';
import { loadSiteData } from './loader';

import { sortByDate } from './date';
import './object';

const ALWAYS_COMPUTE = process.env.NODE_ENV == 'development';

// class Slot {
// }

export class Site {

    static DATA_PATH = path.join(process.cwd(), 'data/');
    static DATA = null;

    static async loadData() {
        if (ALWAYS_COMPUTE || Site.DATA === null)
            Site.DATA = await loadSiteData(Site.DATA_PATH);
        
        return Site.DATA;
    }

    static async getData(...keys) {
        let out = await Site.loadData();
        for (let key of keys) 
            out = out[key];

        return out;
    }

}

export class Conferences {

    static async getStuyConferenceMap() {
        return await Site.getData('conferences', 'stuy');
    }

    static async getStuyConference(name) {
        let cnf = (await Conferences.getStuyConferenceMap())[name]; 
        return cnf;
    }

    static async getOtherConferenceMap() {
        return await Site.getData('conferences', 'other');
    }

    static async getOtherConference(name) {
        let cnf = (await Conferences.getOtherConferenceMap())[name]; 
        return cnf;
    }


    static SORTED_STUY = null;
    static async getStuyConferences() {
        if (ALWAYS_COMPUTE || Conferences.SORTED_STUY === null) {
            const stuyConferences = await Conferences.getStuyConferenceMap();
            Conferences.SORTED_STUY = sortByDate(stuyConferences.entries(), {
                getDate: e => e[1].details.date
            });
        }

        return Conferences.SORTED_STUY;
    }

    static SORTED_OTHER = null;
    static async getOtherConferences() {
        if (ALWAYS_COMPUTE || Conferences.SORTED_OTHER === null) {
            const otherConferences = await Conferences.getOtherConferenceMap();
            Conferences.SORTED_OTHER = sortByDate(otherConferences.entries(), {
                getDate: e => e[1].date
            });
        }

        return Conferences.SORTED_OTHER;
    }


    static async getConferences() {

        // create some real iterator library with object/Iterator
        class NestedArrayIterator {
            constructor(...arrays) {
                this.arrays = arrays;
            }

            *[Symbol.iterator]() {
                for (let array of this.arrays) {
                    for (let item of array) {
                        yield item;
                    }
                }
            }

            map(callback) {
                let mapped = [], i = 0;
                for (let item of this) {
                    mapped.push(callback(item, i++));
                }
                return mapped;
            }
        }

        return new NestedArrayIterator(
            await Conferences.getStuyConferences(),
            await Conferences.getOtherConferences()
        );
    }

    static async getConference(name) {
        // if the conference mapper needs more data, change each element to an object 
        // and change the string to a payload object and unpack into the conference's data
        const conferencesMapper = [
            [ 'stuy', await Conferences.getStuyConferenceMap() ],
            [ 'other', await Conferences.getOtherConferenceMap() ],
        ];

        for (let [ type, conferences ] of conferencesMapper) {
            if (name in conferences) {
                let data = conferences[name];
                if ('type' in conferences) {
                    console.warn(`Conference "${name} contains field "type:${conferences[type]}, which overlaps with implicit "type:${type}". Ignoring "type" in conference data.`)
                }

                data['type'] = type;
                return data;
            }
        }
    }
}

export class News {

    static async getPostMap() {
        return await Site.getData('news');
    }

    static SORTED_POSTS = null;

    static async getPosts() {
        if (ALWAYS_COMPUTE || News.SORTED_POSTS === null) {
            const newsData = await News.getPostMap();
            News.SORTED_POSTS = sortByDate(newsData.entries(), {
                getDate: entry => entry[1].date
            });
        }

        return News.SORTED_POSTS;
    }

    static async getPost(slug) {
        return (await News.getPostMap())[slug];
    }

}