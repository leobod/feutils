import { PreLang } from "../src";
import path from "path";

console.log(PreLang.filterBlank(path.resolve(process.cwd(), 'file/demo01.json')));
