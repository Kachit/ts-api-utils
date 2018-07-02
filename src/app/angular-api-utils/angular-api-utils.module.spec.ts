import { AngularApiUtilsModule } from './angular-api-utils.module';

describe('AngularApiUtilsModule', () => {
  let angularApiUtilsModule: AngularApiUtilsModule;

  beforeEach(() => {
    angularApiUtilsModule = new AngularApiUtilsModule();
  });

  it('should create an instance', () => {
    expect(angularApiUtilsModule).toBeTruthy();
  });
});
