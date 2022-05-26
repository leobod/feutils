import { JsonReader } from "../util";

import LooseObject from "../typings/LooseObject";


/**
 *
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
}
