import { newE2EPage } from '@stencil/core/testing';

describe('xcok-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xcok-ambulance-wl-app></xcok-ambulance-wl-app>');

    const element = await page.find('xcok-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
