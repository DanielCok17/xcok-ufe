import { newSpecPage } from '@stencil/core/testing';
import { XcokAmbulanceWlList } from '../xcok-ambulance-wl-list';
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { WaitingListEntry } from '../../../api/ambulance-wl';

describe('xcok-ambulance-wl-list', () => {
  const sampleEntries: WaitingListEntry[] = [
    {
      id: "entry-1",
      patientId: "p-1",
      name: "Juraj Prvý",
      waitingSince: "20240203T12:00",
      estimatedDurationMinutes: 20
    }, {
      id: "entry-2",
      patientId: "p-2",
      name: "James Druhý",
      waitingSince: "20240203T12:05",
      estimatedDurationMinutes: 5
    }];

  let mock: MockAdapter;

  beforeAll(() => { mock = new MockAdapter(axios); });
  afterEach(() => { mock.reset(); });

  it('renders', async () => {
    mock.onGet().reply(200, sampleEntries);

    const page = await newSpecPage({
      components: [XcokAmbulanceWlList],
      html: `<xcok-ambulance-wl-list ambulance-id="test-ambulance" api-base="http://test/api"></xcok-ambulance-wl-list>`,
    });
    const wlList = page.rootInstance as XcokAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length

    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(expectedPatients).toEqual(sampleEntries.length);
    expect(items.length).toEqual(expectedPatients);
  });
});
