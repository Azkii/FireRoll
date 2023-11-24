export interface User {
  name: string;
  icon: string;
  email: string;
  tag: string;
}

const user: User = {
  name: "Next Test",
  icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Calico_tabby_cat_-_Savannah.jpg/1200px-Calico_tabby_cat_-_Savannah.jpg",
  email: "next@next.next",
  tag: "#27",
};

export const getUser = () => {
  return user;
};
