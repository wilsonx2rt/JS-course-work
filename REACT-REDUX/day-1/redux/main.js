const initialState = {
  count: 0,
  todos: [],
}

const countReducer = (state=initialState, action) => {
  newState = { ...state };
  if (action.type === 'ADD_COUNT') {
    newState.count = newState.count + 1;
    return newState
  } else if (action.type === 'SUB_COUNT') {
    newState.count = newState.count -1;
    return newState;
  } else {
    return newState;
  }
}
const store = Redux.createStore(countReducer);

/* subscribe and render */
const subscribeAndRender = () => {
  store.subscribe(() => {
    document.querySelector('#count').innerText = store.getState().count;
  });
  
  const render = () => {
    document.querySelector('#count').innerText = store.getState().count;
  };
  
  store.subscribe(render);
  render();
}

/* listen and dispatch */
const setListeners = () => {
  const plusBtn = document.querySelector('#plus');
  
  const minusBtn = document.querySelector('#minus');
  
  plusBtn.addEventListener('click', () => {
    console.log('plus');
    store.dispatch({
      type: 'ADD_COUNT',
    });
  });

  minusBtn.addEventListener('click', () => {
    console.log('minus');
    store.dispatch({
      type: 'SUB_COUNT',
    });
  })
};


setListeners();
subscribeAndRender();