export interface Query {
    total:         number;
    page:          number;
    perPage:       number;
    query:         null;
    location:      null;
    radius:        null;
    online:        boolean;
    categorySlugs: null;
    providerSlugs: null;
    updatedAfter:  null;
    order:         null;
}