const initialState = {
  posts: [
    {
      name: "Jame Genty",
      post: "Yesterday with @Karen Miller and @Marvin Stemperd at the #Rock'n'Rolla concert in LA. Was totally fantastic! People were really excited about this one!",
      photo: "https://friendkit.cssninja.io/assets/img/demo/unsplash/1.jpg",
    },
    {
      name: "David Genty",
      post: "You all know how i love bootstrap, but i didn't have time to dig deeper into it. Therefore i found this very interesting video i wanted to share with you all. #bootsrap #webdesign",
    },
    {
      name: "Adam Genty",
      post: "Hey friends ! Iam back and i wanted to share with you some awesome pictures we took during our trip to Santa Monica. We had wonderful holidays at the beach. Kisses to all !",
    },
  ],
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POST":
      let _state = JSON.parse(JSON.stringify(state));
      _state.posts.unshift({
        name: "Dima Texq",
        post: action.value,
      });
      console.log(_state);
      return _state;
    default:
      return state;
  }
};
