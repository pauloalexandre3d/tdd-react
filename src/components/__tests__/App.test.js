import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<App />);
});

it('Shows a comment box', () => {
  expect(wrapper.find(CommentBox).length).toEqual(1);
});

it('Shows a comment list', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CommentList).length).toEqual(1);
  });
