export interface IDriver {
    driverId: string,
    code: string,
    url: string,
    givenName: string,
    familyName: string,
    dateOfBirth: string,
    nationality: string,
}

export interface ISeason {
    season: number,
    url: string;
}

export interface IRace {
    season: number,
    round: number,
    url: string,
    raceName: string,
    Circuit: {
        circuitId: string;
        url: string;
        circuitName: string;
        Location: {
            lat: number;
            long: number;
            locality: string;
            country: string;
        };
    };
    date: string,
}