export type Resolution = "uhd" | "fhd" | "hd" | "sd";

export interface MovieSearchDetails {
   imdbId: string;
   title: string;
   resolution?: Resolution;
   year: number;
}

export interface MovieTorrentInfo {
   id: string;
   torrentName: string;
   size: number;
   seeds: number;
   info: TitleParseInfo,
   _props?: {
      [key: string]: any
   }
}

export interface MagnetTorrent {
   isMagnet: true;
   magnet: string;
}

export interface FileTorrent {
   isMagnet: false;
   file: Buffer;
}

export type Torrent = FileTorrent | MagnetTorrent;

export interface Logger {
   debug(m: string, ...args: any): void;
   info(m: string, ...args: any): void;
   warn(m: string, ...args: any): void;
   error(m: string, ...args: any): void;
}

export type ProviderConfig = {
   [key: string]: number | string | boolean | undefined;
}

export type ProviderConfigInfo = {
   [key: string]: {
      description?: string;
      friendlyName: string;
      type: "number" | "string" | "boolean" | "password";
      default?: number | string | boolean;
      required?: boolean
   }
}

export interface ProviderInfo {
   configInfo: ProviderConfigInfo;
   name: string;
   version?: string;
   description?: string;
}

export interface TorrentProvider {
   searchMovie(movie: MovieSearchDetails): Promise<MovieTorrentInfo[]>;
   getTorrentFor(movie: MovieTorrentInfo): Promise<Torrent>;
   init(config: ProviderConfig, log: Logger): Promise<void>;
   clearData(): Promise<void>;
}

export interface TitleParseInfo {
   title: string;
   year?: number;
   resolution?: string;
   extended?: boolean;
   unrated?: boolean;
   proper?: boolean;
   repack?: boolean;
   convert?: boolean;
   hardcoded?: boolean;
   retail?: boolean;
   remastered?: boolean;
   region?: string;
   container?: string;
   source?: string;
   codec?: string;
   audio?: string;
   group?: string;
   season?: number;
   episode?: number;
   language?: string;
}