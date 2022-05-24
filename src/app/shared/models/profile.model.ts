export interface Profile {
    id: number;
    name: string;
    phone: string;
    address: string;
    postIds: number[];
    friends: number[];
  }

  export interface Posts {
    postId: number;
    userId: number;
    date: string;
    description: string;
    comments: Comments[]
  }

  export interface Comments {
    userId: number;
    comment: string
  }