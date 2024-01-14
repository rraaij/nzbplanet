export type MovieInfo = {
  channel: {
    title: string;
    description: string;
    link: string;
    language: string;
    webMaster: string;
    category: {};
    image: {
      url: string;
      title: string;
      link: string;
      description: string;
    };
    response: {
      "@attributes": {
        offset: string;
        total: string;
      };
    };
    item: MovieItem[];
  };
};

export type MovieItem = {
  title: string;
  guid: string;
  link: string;
  comments: string;
  pubDate: string;
  category: string;
  description: string;
  enclosure: {
    "@attributes": {
      url: string;
      length: string;
      type: string;
    };
  };
  attr: [
    {
      "@attributes": {
        name: string;
        value: string;
      };
    },
  ];
};

export type MoviePosterInfo = {
  page: number;
  results: MoviePoster[];
  total_pages: number;
  total_results: number;
};

export type MoviePoster = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
