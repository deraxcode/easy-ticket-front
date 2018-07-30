import { RegistryModule } from './registry.module';

describe('RegistryModule', () => {
  let registryModule: RegistryModule;

  beforeEach(() => {
    registryModule = new RegistryModule();
  });

  it('should create an instance', () => {
    expect(registryModule).toBeTruthy();
  });
});
