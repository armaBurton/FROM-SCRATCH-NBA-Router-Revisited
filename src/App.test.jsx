import { findByText, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { ColorProvider } from './context/ColorProvider';
import App from './App';
import { denim } from './testData';
import { bigTestData } from './bigTestData';
import fetch from 'cross-fetch';
import { findCacheDir } from 'webpack-dev-server';

// jest.mock('./views/ColorDetail/ColorDetail.jsx', () => {
//   return {
//     fetchHex: function () {
//       return {
//         hex: {
//           value: '#135ABC',
//           clean: '135ABC',
//         },
//         rgb: {
//           fraction: {
//             r: 0.07450980392156863,
//             g: 0.35294117647058826,
//             b: 0.7372549019607844,
//           },
//           r: 19,
//           g: 90,
//           b: 188,
//           value: 'rgb(19, 90, 188)',
//         },
//         hsl: {
//           fraction: {
//             h: 0.5966469428007889,
//             s: 0.8164251207729469,
//             l: 0.40588235294117647,
//           },
//           h: 215,
//           s: 82,
//           l: 41,
//           value: 'hsl(215, 82%, 41%)',
//         },
//         hsv: {
//           fraction: {
//             h: 0.5966469428007889,
//             s: 0.8989361702127661,
//             v: 0.7372549019607844,
//           },
//           value: 'hsv(215, 90%, 74%)',
//           h: 215,
//           s: 90,
//           v: 74,
//         },
//         name: {
//           value: 'Denim',
//           closest_named_hex: '#1560BD',
//           exact_match_name: false,
//           distance: 101,
//         },
//         cmyk: {
//           fraction: {
//             c: 0.8989361702127661,
//             m: 0.5212765957446808,
//             y: 0,
//             k: 0.26274509803921564,
//           },
//           value: 'cmyk(90, 52, 0, 26)',
//           c: 90,
//           m: 52,
//           y: 0,
//           k: 26,
//         },
//         XYZ: {
//           fraction: {
//             X: 0.29001411764705887,
//             Y: 0.3214941176470588,
//             Z: 0.744269411764706,
//           },
//           value: 'XYZ(29, 32, 74)',
//           X: 29,
//           Y: 32,
//           Z: 74,
//         },
//         image: {
//           bare: 'https://www.thecolorapi.com/id?format=svg&named=false&hex=135ABC',
//           named: 'https://www.thecolorapi.com/id?format=svg&hex=135ABC',
//         },
//         contrast: {
//           value: '#ffffff',
//         },
//         _links: {
//           self: {
//             href: '/id?hex=135ABC',
//           },
//         },
//         _embedded: {},
//       };
//     },
//   };
// });

const server = setupServer(
  rest.get('https://www.thecolorapi.com/id?hex=135abc', (req, res, ctx) => {
    return res(ctx.json(denim));
  })
);

global.fetch = fetch;

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('RandoColorizer', () => {
  test('check for list of colors', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <ColorProvider>
          <App />
        </ColorProvider>
      </MemoryRouter>
    );

    screen.getByText(/randocolor generator/i);
    const list = await screen.findAllByRole('link');
    expect(list.length).toBe(10);
  });

  test('input hex value and return a detailed view of a color', async () => {
    render(
      <MemoryRouter>
        <ColorProvider>
          <App />
        </ColorProvider>
      </MemoryRouter>
    );

    const input = screen.getByRole('textbox', { placeholder: '123def' });
    const button = screen.getByRole('button', { name: 'Refresh Colors' });
    // console.log(`|| button >`, button);
    // userEvent.type(input, '135abc');
    // userEvent.click(button);

    // expect(/denim/i).toBeInTheDocument();
  });
});
