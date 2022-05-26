import { JsonReader } from "../util";

import LooseObject from "../type/LooseObject";


/**
 * 语言预处理
 * @param p
 */

export class PreLang {
  public static filterBlank = function(p: string): LooseObject {
    const jsonReader = new JsonReader();
    const origin: LooseObject = jsonReader.toJson(p) as LooseObject;
    const outObj: LooseObject = {}
    for (const key in origin) {
      if (origin[key] === '') {
        outObj[key] = ''
      }
    }
    return outObj
  }

  public static diffFiles = function (originP: string, completeP: string) {
    const jsonReader = new JsonReader();
    const originJson: LooseObject = jsonReader.toJson(originP) as LooseObject;
    const completeJson: LooseObject = jsonReader.toJson(completeP) as LooseObject;
    const originKeys = []
    for (const key in originJson) {
      originKeys.push(key)
    }
    const outObj: LooseObject = {};
    for (const key of originKeys) {
      if (completeJson[key] === undefined) {
        outObj[key] = ''
      } else {
        outObj[key] = completeJson[key]
      }
    }
    return outObj;
  };

}
