## GraphQL (Graph Query Language)
- What is GraphQL ?
- Why GraphQL ? Benefits ?
- REST vs GraphQL
- Building block
- Build GraphQL App
- Calling GraphQL from client
- Tooling
- Advanced

## GraphQL 

GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.


https://studio.apollographql.com/org/mohit-soods-team/dashboard -> play with GraphQL

In REST API we have to call 3 API to get continents , countries and languages but in GraphQL we can achieve this using one call (combining requests) .This makes it very powerful.

```
query ExampleQuery {

    continents {
        name 
        code
    }

    countries {
        name 
        code
    }

    languages {
        name
        code
    }
}

```

## Benefits

- Avoid overfetching (Fetch only what is needed)
- Avoid underfetching
- Better mobile performance (for mobiles sometimes we want to fetch less data e.g showing name on mobile and all other info in desktop)
- Efficiency & precision
- Declarative data fetching
- structural hierarchical data 

```
query ExampleQuery {
    continents {
        name
        countries {
            name 
            languages {
                name
                code
                rtl
            }
        }
    }
}
```

- strongly typed
- introspection
- Real time capabilities  -> subscriptions


## REST V/S GraphQL
<table>
<thead>
<tr>
<th>Aspect</th>
<th>REST</th>
<th>GraphQL</th>

</tr>

</thead>
<tbody>

<tr>
<td>Data fetching</td>
<td>Multiple End points</td>
<td>Single End point</td>

</tr>

<tr>
<td>Request Structure</td>
<td>Fixed structure + HTTP methods</td>
<td>Flexible (Query/Mutation)</td>

</tr>


<tr>
<td>Over fetching / Under fetching</td>
<td>Issues</td>
<td>Resolved</td>

</tr>


<tr>
<td>Response size</td>
<td>Fixed Size</td>
<td>Flexible size (client has control what to fetch)</td>

</tr>


<tr>
<td>Versioning</td>
<td>Explicit versioning</td>
<td>Flexible nature</td>

</tr>


<tr>
<td>Schema Definition</td>
<td>Not well defined</td>
<td>Explicit schema definition</td>

</tr>


<tr>
<td>Realtime capabilities</td>
<td>Polling / web socket</td>
<td>out of scope support (subscription)</td>

</tr>

<tr>
<td>Tooling Support</td>
<td>Postman</td>
<td>Playgrounds</td>

</tr>


<tr>
<td>Caching</td>
<td>Relies on HTTP cache</td>
<td>Fine grained</td>

</tr>


<tr>
<td>Client Control</td>
<td>No, client can't decide response</td>
<td>Yes, client can't decide response</td>

</tr>

<tr>
<td>Adoption & Community</td>
<td>Wide spread</td>
<td>Rapidly growing & community support</td>

</tr>


</tbody>

</table>

## GraphQL has 2 parts

- Creator (Server)
- Consumer (Client) -> React app consuming it

We have to create server (GraphQL Library) and on client we have optional stuff. We can use some GraphQL client library in client side.


## GraphQL Building Blocks

### Schema / Types 

  Represents structure / origanisation  of data 
 

 SDL (GraphQL schema definition language)
 ```
 Country {
    code : String,
    continent: Continent,
    emoji: String,
    name: String,
    native: String,
    phone: String,
    states: [States]
 }
 ```

  Types:
   - Scalar: These are inbuilt types like ID, String, Int, Boolean
   - Custom Types : We create it by our own like [States], Continent


### Query / Mutation

HTTP Post

Query -> get the data

Mutation -> update the data

```
type Query {
    countries: [Country]
}

```

```
type Mutation {
    language(id: ID): Language
}

```

###  Resolver

Resolver are the functions that help you to get the data or update the data on the server . We can define that 
function implementation on the server.

```
Query: {
    countries: (parent,args, context, info) => {
        return //;
    }
}


```

here : 
  - parent : parent of that key if present 
  - args: args is the filter if present
  - context: any request that will be entering the graphql server will go through multiple resolver and
  multiple other logics before it respondes. All of these places where you want to share some common 
  information inside your resolver we can pass this info in context
  - info: 

<hr />

### Apollo Server

Apollo server is a GraphQL server that is compatible with any GraphQL client, including apollo client.It is a
best way to building a production-ready , self-documenting GraphQL API that can be used from any data source.


### Creating an apollo server app 

 #### <u>Requirement</u>

```
books {
    id,
    title,
    publishedYear,
    author,
}

author {
    id,
    name,
    books,
}


type Book {
    id: ID! // ! indicates it is a mandatory field
}

```


#### Data we need 
    - list of books
    - list of authors
    - list of books with author details
    - list of author with book details



<hr />

### Schema Definition

```
export const typeDefs = `#graphql

    type Author {
        id: ID!
        name: String!
    }

    type Book {
        id: ID!
        title: String!
        publishedYear: Int
    }


    type Query {
        authors: [Author]
        books: [Book]
    }

`
```

### Resolver functions

```
export const resolvers = {
  Query: {
    authors: () => {
      return [
        {
          id: 1,
          name: "Mohit Sood",
        },
      ];
    },
    books: () => {
      return [
        {
          id: 1,
          title: "JS Mastery",
          publishedYear: 2024,
        },
      ];
    },
  },
};

```
### Example Query to fetch authors and books in graphql apollo playground

```
query Query {
  authors {
    id,
    name,
  },
  books {
    id,
    title,
  }
}
```

### Request Payload if we have to call it from React App

```
{
    "query": "query Query {\n  authors {\n    id,\n    name,\n  },\n  books {\n    id,\n    title,\n  }\n}\n",
    "variables": {},
    "operationName": "Query"
}

```

### Working on defined Author type / schema

This "Author" is a cutom type / scheme (it was not deefined in schema) , so we need to define in the resolver (custom resolver) and include fromm where and how to get this author detail

```
type Book {
    id: ID!
    title: String!
    publishedYear: Int
    author: Author
}

```

### Full Query

```
query Query {

  authors {
    id
    name
    books {
      title
    }
    
  }
  books {
    id,
    title,
    author {
      name
    }
  },
}
```

### Mutation 

Mutation are used to update the data 

 - typedef

 ```
  type Mutation {
        addBook(title: String!, publishedYear: Int, authorId: ID!) : Book!
    }

```

- Resolver for mutation for addBook

```
mutation AddBook($title: String!, $authorId: ID!) {
  addBook(title: $title, authorId: $authorId) {
    title
  }
},

```

Explore Apollo Client for graphQL queries (useQuery hook)
- https://www.apollographql.com/docs/react/get-started


# References

- https://studio.apollographql.com/org/mohit-soods-team/dashboard

- https://graphql.org/

- https://graphql.org/learn/

- Creating apollo server for our app: https://www.apollographql.com/docs/apollo-server

- https://www.apollographql.com/docs 
