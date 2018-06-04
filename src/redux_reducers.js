import axios from "axios";
import { createStore, applyMiddleware } from "redux";

const initialState = {
  mylist: [
    {
      title: "Futurama",
      id: 1,
      img: "http://cdn1.nflximg.net/webp/7621/3787621.webp"
    },
    {
      title: "The Interview",
      id: 2,
      img: "http://cdn1.nflximg.net/webp/1381/11971381.webp"
    },
    {
      title: "Gilmore Girls",
      id: 3,
      img: "http://cdn1.nflximg.net/webp/7451/11317451.webp"
    }
  ],
  recommendations: [
    {
      title: "Family Guy",
      id: 4,
      img: "http://cdn5.nflximg.net/webp/5815/2515815.webp"
    },
    {
      title: "The Croods",
      id: 5,
      img: "http://cdn3.nflximg.net/webp/2353/3862353.webp"
    },
    {
      title: "Friends",
      id: 6,
      img: "http://cdn0.nflximg.net/webp/3200/9163200.webp"
    }
  ]
};

export const store = createStore(
  updateReducer,
  initialState,
  window.devToolsExtension && window.devToolsExtension()
);

function updateReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      for (let i = 0; i < state.recommendations.length; i++) {
        if (state.recommendations[i].id === action.payload) {
          return {
            mylist: [...state.mylist, state.recommendations[i]],
            recommendations: [
              ...state.recommendations.slice(0, i),
              ...state.recommendations.slice(i + 1)
            ]
          };
        }
      }
      return state;

    case "DELETE_FROM_FAVORITE":
      for (let i = 0; i < state.mylist.length; i++) {
        if (state.mylist[i].id === action.payload) {
          return {
            ...state,
            mylist: [...state.mylist.slice(0, i), ...state.mylist.slice(i + 1)],
            recommendations: [...state.recommendations, state.mylist[i]]
          };
        }
      }
      return state;

    default:
      return state;
  }
}

export function addToFavorite(id) {
  return {
    type: "ADD_TO_FAVORITE",
    payload: id
  };
}

export function deleteFromFavorite(id) {
  return {
    type: "DELETE_FROM_FAVORITE",
    payload: id
  };
}

export default updateReducer;
