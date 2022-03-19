export interface ShipsInterface {
  readonly id: string;
}

interface LinksInterface {
  readonly flickr_images: string[] | undefined;
  readonly mission_patch_small: string | undefined;
}

export interface LaunchDataInterface {
  readonly details: string | null;
  readonly id: string;
  readonly mission_name: string;
  readonly links: LinksInterface;
  readonly launch_success?: boolean;
  readonly upcoming?: boolean;
  readonly launch_date_local?: string;
  readonly ships?: ShipsInterface[];
}