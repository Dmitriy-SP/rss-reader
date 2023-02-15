/*
import onChange from 'on-change';
import * as yup from 'yup';
import request from './request.js';
import render, { renderFeedback } from './render.js';
import addID, { hasAdded, hasPost } from './utils.js';
import watchingFeeds from './watchingFeeds.js';

const schema = yup.string().url();

export default (state) => {
  const form = document.querySelector('form');
  const inputURL = document.querySelector('#url-input');
  const watchedState = onChange(state, renderFeedback);

  watchingFeeds(state);
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const url = inputURL.value;
    schema.isValid(url)
      .then((valid) => {
        if (valid) {
          if (hasAdded(state, url)) {
            watchedState.uiState.formStatus = 'added';
          } else {
            request(url)
              .then((data) => {
                switch (data) {
                  case 'networkError':
                    watchedState.uiState.formStatus = 'networkError';
                    return;
                  case 'rssError':
                    watchedState.uiState.formStatus = 'unvalid';
                    return;
                  default: {
                    inputURL.value = '';
                    addID(state, data);
                    state.feedList.push(data.feed);
                    const newPosts = data.posts.filter((post) => !hasPost(state, post));
                    state.postsList = [...state.postsList, ...newPosts];
                    render(state);
                    watchedState.uiState.formStatus = 'add';
                  }
                }
              });
          }
        } else {
          watchedState.uiState.formStatus = 'unvalid';
        }
      });
  });
};
*/