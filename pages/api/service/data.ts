import {IKeyValuePairAny} from "../../../src/utils/types";

export type PageDataType = {
  data: IKeyValuePairAny & {
    title: string;
    subTitle?: string;
  }
}

export const data = {
  title: 'Kashans Web Development',
  subTitle: 'Many desktop publishing packages and web page editors nowreadable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in theirreadable English.',
  sections: []
}
