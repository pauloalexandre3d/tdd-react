import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';
import { MemoryRouter } from 'react-router-dom';

let wrapper;

beforeEach(() => {
  wrapper = shallow(
    <MemoryRouter initialEntries={['/post']}>
      <App auth={false}/>
    </MemoryRouter>
  );
});

it('Shows a comment box', () => {
  expect(wrapper.find(CommentBox).length).toEqual(1);
});

it('Shows a comment list', () => {
  expect(wrapper.find(CommentList).length).toEqual(1);
});
