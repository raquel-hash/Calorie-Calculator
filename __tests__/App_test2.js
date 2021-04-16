//#4 Si la aplicacion procesa sin fallar
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

test('App renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
  });
