export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

export type AppStackParamList = {
  Dashboard: undefined;
  AddBook: undefined;
  BookDetail: { bookId: string };
};

export type AppTabParamList = {
  Library: undefined;
  Profile: undefined;
};
