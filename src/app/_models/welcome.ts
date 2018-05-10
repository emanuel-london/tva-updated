export interface WelcomeContent {
   body: WelcomeBody[];
   changed: WelcomeTime[];
   created: WelcomeTime[];
   default_langcode: WelcomeArray[];
   menu_link: WelcomeArray[];
   nid: WelcomeId[];
   title: WelcomeArray[];
   uid: WelcomeUid[];
   tid: WelcomeArray[];
   weight: WelcomeArray[];
   uuid: WelcomeArray[];
   name: WelcomeArray[];
   vid: WelcomeId[];
   type: WelcomeType[];
   sticky: WelcomeArray[];
   revision_uid: WelcomeUid[];
   revision_translation_affected: WelcomeArray[];
   revision_timestamp: WelcomeArray[];
   revision_log: WelcomeArray[];
   promote: WelcomeArray[];
   path: WelcomePath[];
 }

export interface WelcomeBody {
   format: string;
   processed: string;
   summary: string;
   value: string;
 }

export interface WelcomeArray {
  value: string;
}
export interface WelcomeId {
  value: number;
}

export interface WelcomeTime {
  value: string;
  format: string;
}

export interface WelcomeType {
  target_id: number;
  target_type: string;
  target_uuid: string;
}

export interface WelcomeUid {
  target_id: number;
  target_type: string;
  target_uuid: string;
  url: string;
}

export interface WelcomePath {
  alias: string;
  pid: number;
  langcode: string;
  url: string;
}
