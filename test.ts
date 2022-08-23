/**
 * const obj = {}
 * 要求属性typea、typeb有且只有一个
 */
type Param =
  | {
      typea: string;
      typeb?: never;
    }
  | {
      typea?: never;
      typeb: string;
    };

const param1 = <Param>{};
param1.typea = '';
param1.typeb = '';
const param2 = <Param>{ typea: '' };
const param3 = <Param>{ typea: '', typeb: '' };
