export class PaginationEntity {

    private total = 0;

    private count = 0;

    public setTotal(total: number): PaginationEntity {
        this.total = total;
        return this;
    }

    public setCount(count: number): PaginationEntity {
        this.count = count;
        return this;
    }

    public getTotal(): number {
        return this.total;
    }

    public getCount(): number {
        return this.count;
    }
}
