export interface Forcast {
    date: string;
    day: {
        maxtemp_c: number;
        condition: {
            icon: string;
            text: string;
        }
    };
}