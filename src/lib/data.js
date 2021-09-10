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
        return (await Conferences.getStuyConferenceMap())[name];;
    }

    static getStuyDate(e) {
        return e[1].details.date;
    }

    static SORTED_STUY = null;
    static async getStuyConferences() {
        if (ALWAYS_COMPUTE || Conferences.SORTED_STUY === null) {
            const stuyConferences = await Conferences.getStuyConferenceMap();
            Conferences.SORTED_STUY = sortByDate(stuyConferences.entries(), {
                getDate: Conferences.getStuyDate
            });
        }

        return Conferences.SORTED_STUY;
    }

    static async getOtherConferenceMap() {
        return await Site.getData('conferences', 'other');
    }

    static async getOtherConference(name) {
        return (await Conferences.getOtherConferenceMap())[name];
    }


    static getOtherDate(e) {
        return e[1].date;
    }

    static SORTED_OTHER = null;
    static async getOtherConferences() {
        if (ALWAYS_COMPUTE || Conferences.SORTED_OTHER === null) {
            const otherConferences = await Conferences.getOtherConferenceMap();
            Conferences.SORTED_OTHER = sortByDate(otherConferences.entries(), {
                getDate: Conferences.getOtherDate
            });
        }

        return Conferences.SORTED_OTHER;
    }


    static addType(name, conference, type) {
        if ('type' in conference) {
            console.warn(`Conference "${name}" contains field "type:${conference[type]}, which overlaps with implicit "type:${type}". Ignoring "type" in conference data.`)
        }

        conference['type'] = type;
        return conference;
    }

    static async getConferencesIterator() {
        class ConferencesIterator {
            constructor(stuyConferences, otherConferences) {
                this.stuyConferences = stuyConferences;
                this.otherConferences = otherConferences;
            }

            *[Symbol.iterator]() {
                for (let name in this.stuyConferences) {
                    yield [
                        name,
                        Conferences.addType(name, this.stuyConferences[name], 'stuy')
                    ];
                }

                for (let name in this.otherConferences) {
                    yield [
                        name,
                        Conferences.addType(name, this.otherConferences[name], 'other')
                    ];
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

        return new ConferencesIterator(
            await Conferences.getStuyConferenceMap(),
            await Conferences.getOtherConferenceMap()
        );
    }

    static getConferenceDate(e) {
        if (e[1].type == 'stuy') {
            return Conferences.getStuyDate(e);
        }
        return Conferences.getOtherDate(e);
    }

    static SORTED_ALL = null;
    static async getConferences() {
        if (ALWAYS_COMPUTE || Conferences.SORTED_ALL === null) {
            const allConferences = await Conferences.getConferencesIterator();
            Conferences.SORTED_ALL = sortByDate(allConferences, {
                getDate: Conferences.getConferenceDate
            })
        }

        return Conferences.SORTED_ALL;
    }

    static async getConference(name) {
        // if the conference mapper needs more data, change each element to an object 
        // and change the string to a payload object and unpack into the conference's data
        const conferencesMapper = [
            ['stuy', await Conferences.getStuyConferenceMap()],
            ['other', await Conferences.getOtherConferenceMap()],
        ];

        for (let [type, conferences] of conferencesMapper) {
            if (name in conferences) {
                let conference = conferences[name];
                return Conferences.addType(name, conference, type);
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