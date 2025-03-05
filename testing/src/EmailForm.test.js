import React from "react";
import { shallow, mount } from "enzyme";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import EmailForm from "./EmailForm";  // Asegúrate de que la ruta esté correcta

test('Debería actualizar el email en el estado cuando se llame a changeEmail', () => {
  const wrapper = shallow(<EmailForm />);
  wrapper.instance().changeEmail({ target: { value: 'nuevoemail@example.com' } });
  expect(wrapper.state().email).toBe('nuevoemail@example.com');
});

test('Debería actualizar el nombre de usuario en el estado cuando se llame a changeUserName', () => {
  const wrapper = shallow(<EmailForm />);
  wrapper.instance().changeUserName({ target: { value: 'NuevoUsuario' } });
  expect(wrapper.state().username).toBe('NuevoUsuario');
});

test('Debería llamar a registerUser cuando se envíe el formulario', () => {
  const wrapper = shallow(<EmailForm />);
  const spy = jest.spyOn(wrapper.instance(), 'registerUser');
  wrapper.setState({ email: 'test@mail.com', username: 'TestUser' });
  wrapper.instance().handleSubmit({ preventDefault: jest.fn() });
  expect(spy).toHaveBeenCalled();
});

test('Debería enviar el formulario y actualizar el estado con el mensaje de bienvenida', async () => {
  const wrapper = mount(<EmailForm />);
  wrapper.setState({ email: 'test@mail.com', username: 'TestUser' });
  await wrapper.find('form').simulate('submit');
  await Promise.resolve(); // esperar a que las promesas se resuelvan
  expect(wrapper.state().welcomeMsg).toBe('Bienvenido a ASW');
});

test('Debería actualizar welcomeMsg con la respuesta', async () => {
  const wrapper = shallow(<EmailForm />);
  const mockResponse = { name: 'TestUser' };
  jest.spyOn(wrapper.instance(), 'registerUser').mockResolvedValue(mockResponse);
  await wrapper.instance().registerUser();
  expect(wrapper.state().welcomeMsg).toBe('Bienvenido a ASW');
});

test('Debería coincidir con la instantánea', () => {
  const wrapper = shallow(<EmailForm />);
  expect(wrapper).toMatchSnapshot();
});
