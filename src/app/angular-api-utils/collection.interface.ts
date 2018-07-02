import { PaginationEntity } from './pagination.entity';

export interface CollectionInterface {

    push(object: object): CollectionInterface;

    all(): object[];

    sort(callback): CollectionInterface;

    filter(callback): CollectionInterface;

    count(): number;

    setPaginator(pagination): CollectionInterface;

    getPaginator(): PaginationEntity;
}
