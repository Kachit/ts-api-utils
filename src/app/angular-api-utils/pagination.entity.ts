export class PaginationEntity {
    /**
     * @type {number}
     */
    private total = 0;

    /**
     * @type {number}
     */
    private count = 0;

    /**
     * @param {number} total
     * @returns {PaginationEntity}
     */
    public setTotal(total: number): PaginationEntity {
        this.total = total;
        return this;
    }

    /**
     * @param {number} count
     * @returns {PaginationEntity}
     */
    public setCount(count: number): PaginationEntity {
        this.count = count;
        return this;
    }

    /**
     * @returns {number} total
     */
    public getTotal(): number {
        return this.total;
    }

    /**
     * @returns {number} count
     */
    public getCount(): number {
        return this.count;
    }
}
