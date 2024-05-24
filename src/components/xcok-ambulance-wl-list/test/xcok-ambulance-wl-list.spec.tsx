import { newSpecPage } from '@stencil/core/testing';
import { XcokAmbulanceWlList } from '../xcok-ambulance-wl-list';

describe('xcok-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XcokAmbulanceWlList],
      html: `<xcok-ambulance-wl-list></xcok-ambulance-wl-list>`,
    });
    const wlList = page.rootInstance as XcokAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length

    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(items.length).toEqual(expectedPatients);
  });
});
