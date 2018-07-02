import { PaginationEntity } from './pagination.entity';

export interface CollectionInterface {

    /**
     * @param {object} object
     */
    push(object: object): CollectionInterface;

    /**
     * @returns {Object[]}
     */
    all(): object[];

    /**
     * @param callback
     * @returns {CollectionInterface}
     */
    sort(callback): CollectionInterface;

    /**
     * @param callback
     * @returns {CollectionInterface}
     */
    filter(callback): CollectionInterface;

    /**
     * @returns {number}
     */
    count(): number;

    /**
     * @param {object} pagination
     * @returns {CollectionInterface}
     */
    setPaginator(pagination): CollectionInterface;

    /**
     * @returns {PaginationEntity}
     */
    getPaginator(): PaginationEntity;
}
