import {Merchant} from "./Merchant";

export interface Deal {
    id:                 number;
    title:              string;
    shortTitle:         string;
    description:        string;
    finePrint:          string;
    numberSold?:        number;
    url:                string;
    price:              number;
    value:              number;
    discountAmount:     number;
    discountPercentage: number;
    providerName:       string;
    providerSlug:       string;
    categoryName:       string;
    categorySlug:       string;
    imageURL:           string;
    online:             boolean;
    expiresAt?:         Date;
    createdAt:          Date;
    updatedAt:          Date;
    merchant:           Merchant;
}