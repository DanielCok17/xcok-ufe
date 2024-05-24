import { newE2EPage } from '@stencil/core/testing';

describe('xcok-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xcok-ambulance-wl-editor></xcok-ambulance-wl-editor>');

    const element = await page.find('xcok-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
