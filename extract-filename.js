/*
Extract Filename kata
https://www.codewars.com/kata/597770e98b4b340e5b000071
*/


class FileNameExtractor {
    static extractFileName (dirtyFileName) {
      const match = dirtyFileName.match(/(?<=[0-9]+_)[a-z0-9_-]+\.[a-z0-9_-]+/gi);
      return match[0];
    }
}
