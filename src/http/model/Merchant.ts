import {Country} from "./Country";

export interface Merchant {
    id:           number;
    name:         string;
    address:      string;
    locality?:    string;
    region:       string;
    postalCode?:  string;
    country:      Country;
    latitude?:    number;
    longitude?:   number;
    phoneNumber?: string;
}