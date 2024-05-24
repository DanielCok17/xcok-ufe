import { newSpecPage } from '@stencil/core/testing';
import { XcokAmbulanceWlApp } from '../xcok-ambulance-wl-app';

describe('xcok-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [XcokAmbulanceWlApp],
      html: `<xcok-ambulance-wl-app base-path="/"></xcok-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("xcok-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [XcokAmbulanceWlApp],
      html: `<xcok-ambulance-wl-app base-path="/ambulance-wl/"></xcok-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("xcok-ambulance-wl-list");
  });
});