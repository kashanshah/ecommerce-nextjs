import { Property } from 'csstype';
import ColorScheme = Property.ColorScheme;

export type IKeyValuePair<T> = {
  [K: string]: T;
};

export type IKeyValuePairAny = {
  [K: string]: any;
};

export type MultiLingualString = string | IKeyValuePair<string>;

export type ConstantsType = {
  title: MultiLingualString;
  email: string;
  address: string;
  phone: string;
  seo?: IKeyValuePair<MultiLingualString> & {
    title?: MultiLingualString;
    description?: MultiLingualString;
    keywords?: MultiLingualString;
    robots?: string;
    author?: MultiLingualString;
  };
  languages?: IKeyValuePair<MultiLingualString>;
  isReduxPersistEnabled: boolean;
  socialLinks?: {
    [T in string]: {
      link: string;
      colorScheme?: ColorScheme;
      icon?: string;
    };
  };
  isContactPageDisabled?: boolean;
  copyright?: MultiLingualString;
  ga?: {
    id: string;
    trackHistory?: boolean;
  };
  recaptcha?: {
    siteKey?: string;
  };
  languageSwitcher: {
    title: MultiLingualString;
  };
  stringTranslations: IKeyValuePair<MultiLingualString>;
};
