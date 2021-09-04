import path from 'path';
import { loadSiteData } from './loader';

import { sortByDate } from './date';
import './object';

const ALWAYS_COMPUTE = process.env.NODE_ENV == 'development';

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

    static async getStuyConferences() {
        return await Site.getData('conferences', 'stuy');
    }

    static async getStuyConference(name) {
        return (await Conferences.getStuyConferences())[name];
    }

    static async getOtherConferences() {
        return await Site.getData('conferences', 'other');
    }

    static async getOtherConference(name) {
        return (await Conferences.getOtherConferences())[name];
    }

    static async getConferences() {
        return {
            ...(await Conferences.getStuyConferences()),
            ...(await Conferences.getOtherConferences())
        };
    }

    static async getConference(name) {
        return (await Conferences.getConferences())[name];
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