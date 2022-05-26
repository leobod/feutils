import { PreLang } from "../src";
import path from "path";

// console.log(PreLang.filterBlank(path.resolve(process.cwd(), 'file/demo01.json')));

console.log(PreLang.diffFiles(
  path.resolve(process.cwd(), 'file/demo02_origin.json'),
  path.resolve(process.cwd(), 'file/demo02_complete.json'),
))
