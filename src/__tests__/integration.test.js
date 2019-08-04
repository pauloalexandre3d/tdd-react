import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import App from 'components/App';
import moxios from 'moxios';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'Fetched 1' }, { name: 'Fetched 2' }]
  });
});

afterEach(() => {
  moxios.uninstall();
});

it('can fetch a list of comments and display them', done => {
  const wrapped = mount(
    <Root>
      <MemoryRouter initialEntries={['/post']}>
        <App auth={true}/>
      </MemoryRouter>
    </Root>
  );

  expect(wrapped.find('h4').text).toEqual('Add a Comment');

  wrapped.find('.fetch-comments').simulate('click');

  moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find('li').length).toEqual(2);
    done();
    wrapped.unmount();
  });
});
