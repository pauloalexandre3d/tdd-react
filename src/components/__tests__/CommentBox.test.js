import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root';

let wrapper;

beforeEach(() => {
  const historyMock = { push: jest.fn() };

  wrapper = mount(
    <Root>
      <CommentBox history={historyMock}/>
    </Root>
  );
});

afterEach(() => {
  wrapper.unmount();
});

it('has a text area and a button', () => {
  expect(wrapper.find('textarea').length).toEqual(1);
  expect(wrapper.find('button').length).toEqual(2);
});

describe('the text area', () => {
  beforeEach(() => {
    wrapper
      .find('textarea')
      .simulate('change', { target: { value: 'new comment' } });
    wrapper.update();
  });

  it('has a text area that user can type in', () => {
    expect(wrapper.find('textarea').prop('value')).toEqual('new comment');
  });

  it('should text area clean up after submit', () => {
    wrapper.find('form').simulate('submit');
    wrapper.update();
    expect(wrapper.find('textarea').prop('value')).toEqual('');
  });
});
