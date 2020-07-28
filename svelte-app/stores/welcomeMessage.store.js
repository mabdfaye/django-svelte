import { writable } from 'svelte/store';

function createWelcomeMessageStore(){
  const { subscribe, set } = writable();

  const fetchMessage = () => {
    set(
      fetch('/api/sample-api-view/')
        .then(response => response.json())
        .then(data => data.message)
    );
  }

  return {
    subscribe,
    fetchMessage,
  };
}

export default createWelcomeMessageStore();
