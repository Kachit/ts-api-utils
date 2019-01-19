import { HydratorInterface } from './hydrator.interface';

export abstract class AbstractHydrator implements HydratorInterface {

    public hydrateCollectionFromResponse(response) {
        return this.hydrateCollection(response.data);
    }

    public hydrateEntityFromResponse(response) {
        return this.hydrateEntity(response.data);
    }

    public hydrateCollection(data) {
        let list = this.createCollection();
        for (let i = 0; i < data.length; i++) {
            list.push(this.hydrateEntity(data[i]));
        }
        return list;
    }

    public hydrateEntity(data) {
        let entity = this.createEntity();
        for (let prop in data) {
            if (data.hasOwnProperty(prop)) {
                entity[prop] = data[prop];
            }
        }
        return entity;
    }

    protected abstract createEntity();

    protected abstract createCollection();
}
