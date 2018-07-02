import { HydratorInterface } from './hydrator.interface';

export abstract class AbstractHydrator implements HydratorInterface {

    /**
     * @param {object} response
     * @returns {object[]}
     */
    public hydrateCollectionFromResponse(response) {
        return this.hydrateCollection(response.data);
    }

    /**
     * @param {object} response
     * @returns {Object}
     */
    public hydrateEntityFromResponse(response) {
        return this.hydrateEntity(response.data);
    }

    /**
     * @param {Object} data
     * @returns {object[]}
     */
    public hydrateCollection(data) {
        let list = this.createCollection();
        for (let i = 0; i < data.length; i++) {
            list.push(this.hydrateEntity(data[i]));
        }
        return list;
    }

    /**
     * @param {Object} data
     * @returns {Object}
     */
    public hydrateEntity(data) {
        let entity = this.createEntity();
        for (let prop in data) {
            if (data.hasOwnProperty(prop)) {
                entity[prop] = data[prop];
            }
        }
        return entity;
    }

    /**
     * @returns {object} Entity object
     */
    protected abstract createEntity();

    /**
     * @returns {object[]} Entities collection
     */
    protected abstract createCollection();
}
