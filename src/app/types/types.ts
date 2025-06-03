export interface Location {
  latitude: number;
  longitude: number;
  zoom: number;
}

export interface City {
  name: string;
  location: Location;
}

export interface Offer {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}

export interface FullOffer {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: [string];
  host: User;
  images: [string];
  maxAdults: number;
}

export type Offers = Offer[];

export interface User {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  token: string;
}

export interface Comment {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
}

export type Comments = Comment[];

export interface Point {
  id: string;
  latitude: number;
  longitude: number;
  zoom: number;
}

export type CommentWithId = Comment & {
  commentId: string;
};

export type CommentsToDisplay = CommentWithId[];

export interface CommentToPost {
  comment: string;
  rating: number;
  }

export interface AppData {
    offers: Offers;
    isOffersDataLoading: boolean;
  }
