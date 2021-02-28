export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: string;
};


export type Todo = {
  __typename?: 'Todo';
  id: Scalars['ID'];
  title: Scalars['String'];
  completed: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type TodoInput = {
  title: Scalars['String'];
  completed?: Maybe<Scalars['Boolean']>;
};

export type Query = {
  __typename?: 'Query';
  todos?: Maybe<Array<Todo>>;
  todo?: Maybe<Todo>;
};


export type QueryTodoArgs = {
  id: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createTodo: Todo;
  completeTodo: Todo;
};


export type MutationCreateTodoArgs = {
  id?: Maybe<Scalars['String']>;
  input: TodoInput;
};


export type MutationCompleteTodoArgs = {
  id: Scalars['String'];
};
