// @flow

export interface SocialNetworkType {
  type: 'vk' | 'fb' | 'twitter' | 'github' | 'site';
  link: string;
}

export type SpeakerType = {
  fields: {
    slug: string,
  },
  title: string,
  avatar: string | null,
  jobTitle: string | null,
  organization: string | null,
  socialNetworks: Array<SocialNetworkType>,
  talks: Array<TalkType>,
}

export type RawSpeakerType = {
  title: string,
  avatar: string,
  jobTitle: string | null,
  organization: string | null,
  socialNetworks: Array<SocialNetworkType>,

  fields: {
    slug: string,
    talks: Array<TalkType>,
  },
}

export interface TalkType {
  title: string;
  description: string;

  tags: string[];

  links: {
    video: string | null,
    presentation: string | null,
  } | null;

  event: {
    slug: string,
    date: string,
  };

  speaker: SpeakerType;
}

export type EventType = {
  fields: {
    slug: string,
  },
  title: string,
  description: string,
  address: string,
  date: string,
  socialNetworks: SocialNetworkType[],
  talks: TalkType[],
}

export type RawEventType = {
  fields: {
    slug: string,
    talks: TalkType[],
  },

  title: string,
  description: string,
  address: string,
  date: string,
  socialNetworks: SocialNetworkType[],
}
