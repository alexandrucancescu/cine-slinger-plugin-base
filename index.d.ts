
export type Resolution = "uhd" | "fhd" | "hd" | "low";

export interface MovieDetails {
	imdbId: number;
	title: string;
	resolution?: "uhd" | "fhd" | "hd" | "low";
	year: number;
}

export interface MovieTorrentInfo {
	id: string;
	size: number;
	resolution?: Resolution;
	torrentName: string;
	peers: number;
	year: number;
	_props: {
		[key: string]: any
	}
}

export interface MagnetTorrent {
	magnet: string;
}

export interface FileTorrent {
	file: Buffer;
}

export type Torrent = FileTorrent | MagnetTorrent;

interface Logger {
	debug(m: string): void;
	info(m: string): void;
	warn(m: string): void;
	error(m: string): void;
}

export type ProviderConfig = {
	[key: string]: number | string | boolean;
}

export type TorrentProviderConfigInfo = {
	[key: string]: {
		description?: string;
		friendlyName: string;
		type: "number" | "string" | "boolean" | "password";
		default?: number | string | boolean;
		required?: boolean
	}
}

export interface ProviderInfo {
	configInfo: TorrentProviderConfigInfo;
	name: string;
	description?: string;
}

export interface TorrentProvider {
	new (config: ProviderConfig, log: Logger): TorrentProvider;
	searchMovie(movie: MovieDetails): Promise<MovieTorrentInfo[]>;
	getTorrentFor(movie: MovieTorrentInfo): Promise<Torrent>;
	init(config: ProviderConfig): Promise<void>;
}
