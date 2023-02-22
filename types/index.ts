export type Video = {
  id: string;
  categoryId: number;
  title: string;
  thumbnail: string;
  channelIcon: string;
  channelName: string;
  videoLink: string;
  category: string;
};

export type Playlist = { id: string; name: string; videos: Video[] };

export type User = {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  liked: Video[];
  watchLater: Video[];
  history: Video[];
  playlist: Playlist[];
};
