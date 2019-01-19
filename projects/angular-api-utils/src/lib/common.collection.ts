import { PaginationEntity } from './pagination.entity';
import { CollectionInterface } from './collection.interface';

export class CommonCollection implements CollectionInterface {

    private data = [];

    private paginator: PaginationEntity;

    constructor(data: object[] = []) {
        this.data = data;
        this.paginator = new PaginationEntity();
    }

    public push(entity: object): CollectionInterface {
        this.data.push(entity);
        return this;
    }

    public all(): object[] {
        return this.data;
    }

    public sort(callback): CollectionInterface {
        this.data = this.data.sort(callback);
        return this;
    }

    public filter(callback): CollectionInterface {
        this.data = this.data.filter(callback);
        return this;
    }

    public count(): number {
        return this.data.length;
    }

    public setPaginator(pagination): CollectionInterface {
        this.paginator
            .setTotal(pagination.total)
            .setCount(pagination.count)
        ;
        return this;
    }

    public getPaginator(): PaginationEntity {
        return this.paginator;
    }
}
