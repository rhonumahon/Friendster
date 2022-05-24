export interface Profile {
    id: number;
    name: string;
    contact: string;
    address: string;
    postIds: number[];
    friends: number[];
  }

  export interface Posts {
    postId: number;
    userId: number;
    name: string;
    date: string;
    description: string;
    comments: Comments[]
  }

  export interface Comments {
    userId: number;
    name: string;
    date: string;
    comment: string
  }