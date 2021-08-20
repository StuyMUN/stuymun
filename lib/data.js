import path from 'path';
import { loadSiteData } from './loader';

const ALWAYS_COMPUTE = process.env.NODE_ENV == 'development';

export class Site {

    static DATA_PATH = path.join(process.cwd(), 'data/');
    static DATA = null;

    static async loadData() {
        if (ALWAYS_COMPUTE)
            return await loadSiteData(Site.DATA_PATH);
        
        if (Site.DATA === null)
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

    static DATA = null;

    static async getConferences() {
        if (ALWAYS_COMPUTE)
            return await Conferences.forceGetConferences();

        if (Conferences.DATA === null) {
            Site.DATA = await Conferences.forceGetConferences();
        }
        return Conferences.DATA;
    }

    static async forceGetConferences() {
        function* iterateObject(object) {
            for (let key in object) {
                yield [ key, object[key] ];
            }
        }
        
        function assignToObject(target, object, extraSauce) {
            for (let [ key, value ] of iterateObject(object)) {
                for (let [extraKey, extraValue] of iterateObject(extraSauce)) {
                    value[extraKey] = extraValue;
                }
                target[key] = value;
            }
        }
        
        let conferences = {};

        assignToObject(
            conferences, 
            await Conferences.getStuyConferences(), 
            {type: 'stuy'}
        );

        assignToObject(
            conferences, 
            await Conferences.getOtherConferences(), 
            {type: 'other'}
        );

        return conferences;
    }

    static async getConference(name) {
        return (await Conferences.getConferences())[name];
    }

}

export class News {

    static async getPosts() {
        return await Site.getData('news');
    }

}