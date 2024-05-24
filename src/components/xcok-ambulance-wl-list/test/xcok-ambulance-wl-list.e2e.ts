import { newE2EPage } from '@stencil/core/testing';

describe('xcok-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xcok-ambulance-wl-list></xcok-ambulance-wl-list>');

    const element = await page.find('xcok-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
