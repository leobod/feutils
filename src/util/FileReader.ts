import path from "path";
import fs from "fs";

/**
 * 文件读取
 */
interface Reader {
  read(p: string, type?: BufferEncoding): any;
}


/**
 * JSON文件读取
 */
class JsonReader implements Reader {

  read(p: string, type="utf8"): any {
    const content: string = fs.readFileSync(path.resolve(process.cwd(), p), type as BufferEncoding);
    return content;
  }

  toJson(p:string):JSON {
    return JSON.parse(this.read(p));
  }
}

export {
  Reader,
  JsonReader
};
