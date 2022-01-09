export { Error } from './error';
export { MetaData } from './meta';

export class Result {
  success: boolean;
  data: any;
  meta: any;
  errors: Error[];
}
