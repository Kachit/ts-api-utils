import { PaginationEntity } from './pagination.entity';
import { CollectionInterface } from './collection.interface';

export class CommonCollection implements CollectionInterface {
    /**
     * @type {Array}
     */
    private data = [];

    /**
     * @type {PaginationEntity}
     */
    private paginator;

    /**
     * @param {object[]} data
     */
    constructor(data: object[] = []) {
        this.data = data;
        this.paginator = new PaginationEntity();
    }

    /**
     * @param entity
     * @returns {CollectionInterface}
     */
    public push(entity: object): CollectionInterface {
        this.data.push(entity);
        return this;
    }

    /**
     * @returns {Object[]}
     */
    public all(): object[] {
        return this.data;
    }

    /**
     * @param callback
     * @returns {CollectionInterface}
     */
    public sort(callback): CollectionInterface {
        this.data = this.data.sort(callback);
        return this;
    }

    /**
     * @param callback
     * @returns {CollectionInterface}
     */
    public filter(callback): CollectionInterface {
        this.data = this.data.filter(callback);
        return this;
    }

    /**
     * @returns {number}
     */
    public count(): number {
        return this.data.length;
    }

    /**
     * @param {PaginationEntity} pagination
     * @returns {CollectionInterface}
     */
    public setPaginator(pagination): CollectionInterface {
        this.paginator
            .setTotal(pagination.total)
            .setCount(pagination.count)
        ;
        return this;
    }

    /**
     * @returns {PaginationEntity}
     */
    public getPaginator(): PaginationEntity {
        return this.paginator;
    }
}
