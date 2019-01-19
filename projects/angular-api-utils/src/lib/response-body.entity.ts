export class ResponseBodyEntity {
    public result: boolean;
    public data: object;
    public meta: object;
    public errors: object[] = [];

    public isSuccess(): boolean {
        return (this.result && !this.errors.length);
    }
}
