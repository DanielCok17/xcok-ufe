import { newSpecPage } from '@stencil/core/testing';
import { XcokAmbulanceWlList } from '../xcok-ambulance-wl-list';

describe('xcok-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XcokAmbulanceWlList],
      html: `<xcok-ambulance-wl-list></xcok-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <xcok-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </xcok-ambulance-wl-list>
    `);
  });
});
