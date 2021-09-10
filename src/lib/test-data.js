export class Conferences {

    static getStuyConference(name) {
        return {
            details: {content: `<h2>${name} Conference!</h2><br/><h3>BYOB</h3>` },
            committees: [
                {
                    "name": "ECOSOC",
                    "chair": "Neve Diaz Carr",
                    "codirector": "Co-Director: Aaron Hui",
                    "description": "According to the OECD, about 14 percent of all jobs today are vulnerable to automation, with estimates varying among individual nations.",
                    "bglink": "https://www.youtube.com"
                },
                {
                    "name": "SOCHUM",
                    "chair": "Naya Mukul",
                    "codirector": "Co-Director: Cameron Kluger",
                    "description": "Ethnic conflict has been a major issue in the world arguably since human civilization began.",
                    "bglink": "TBA"
                },
                {
                    "name": "NYC Fiscal Crisis",
                    "chair": "Maya Dunayer",
                    "codirector": "Co-Director: Danielle Que",
                    "description": "The year is 2050 and New York City is enduring yet another fiscal crisis, only 75 years after the last one.",
                    "bglink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                }
            ],
            type: 'stuy'
        };
    }

    static getStuyConferences() {
        let names = [ 'stuymunc i', 'stuymunc iii', 'stuymunc v' ];

        let object = {};

        for (let name of names) {
            object[name] = Conferences.getStuyConference(name);
        }

        return object;
    }

    static getOtherConference(name) {
        return {
            date: { year: 2021, month: 10, day: 23 },
            description: `${name}'s conference! BYOB`,
            'website-link': 'https://www.youtube.com',
            type: 'other'
        };
    }

    static getOtherConferences() {
        let names = [ 'hommunc i', 'hommunc iii', 'busun v' ];

        let object = {};

        for (let name of names) {
            object[name] = Conferences.getOtherConference(name);
        }

        return object;
    }

    static getConferences() {
        return { 
            ...Conferences.getStuyConferences(), 
            ...Conferences.getOtherConferences() 
        };
    }

    static getConference(name) {
        return Conferences.getConferences()[name];
    }

}
