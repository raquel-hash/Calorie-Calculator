//#3 pruebas de instantáneas se utilizan para garantizar que la interfaz de usuario se mantenga coherente, especialmente cuando un proyecto está trabajando con estilos globales.
// Si la aplicacion mantiene una interfaz de usuario coherente  
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

it('App test snapshot', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
  });