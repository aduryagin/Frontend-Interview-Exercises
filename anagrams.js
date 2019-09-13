/**
 * Даны две строки, состоящие из строчных латинских букв.
 * Требуется определить, являются ли эти строки анаграммами,
 * т. е. отличаются ли они только порядком следования символов.
 */

function isAnagrams(a, b) {
  let result = a.length === b.length;

  if (result) {
    for (let i = 0; i < a.length; i++) {
      if (b.indexOf(a[i]) === -1) {
        result = false;
        break;
      }
    }
  }

  return result;
}
