const data = {
  authors: [
    { id: "1", name: "Mohit Sood", bookIds: ["101", "102"] },
    { id: "2", name: "Rohit Sood", bookIds: ["103"] },
  ],
  books: [
    { id: "101", title: "JS For You", publishedYear: 2000, authorId: "1" },
    { id: "102", title: "NodeBook", publishedYear: 2010, authorId: "1" },
    {
      id: "103",
      title: "Recipies from Himalayas",
      publishedYear: 2020,
      authorId: "2",
    },
  ],
};

export const resolvers = {
  Author: {
    books: (parent, arg, context, info) => {
      console.log(parent); // parent is the Author in each iteration it has the information related to the author id
      return data.books.filter((book) => parent.bookIds.includes(book.id));
    },
  },

  Book: {
    // parent -> parent of that key if present , args is the filter if present
    author: (parent, args, context, info) => {
      console.log(parent); // parent is the "Book" and in each iteration it has the information related to the book id
      return data.authors.find(
        (authorDetail) => authorDetail.id === parent.authorId
      );
    },
  },

  Query: {
    authors: () => {
      return data.authors;
    },
    books: () => {
      return data.books;
    },
  },


  Mutation: {
    addBook: (parent, args, context, info) => {
      const newBook = {...args, id: data.books.length + 1 };
      data.books.push(newBook);
      return newBook;
    },
  },

};
