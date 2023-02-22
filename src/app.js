/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  //getDomainNameTest(pronoun, adj, noun, extension);
};

const pronoun = ["the", "our"];
const adj = ["great", "big"];
const noun = ["jogger", "racoon"];
const extension = [".com", ".es"];

const getDomainNameFinal = (
  losPronombres,
  losAdjetivos,
  losSustantivos,
  lasExtensiones
) => {
  const domaineNameFinal = `${losPronombres}${losAdjetivos}${losSustantivos}${lasExtensiones}`;
  console.log(domaineNameFinal);
};

const getExtension = (losPronombres, losAdjetivos, losSustantivos) => {
  extension.forEach(lasExtensiones => {
    getDomainNameFinal(
      losPronombres,
      losAdjetivos,
      losSustantivos,
      lasExtensiones
    );
  });
};

const getNoun = (losPronombres, losAdjetivos) => {
  noun.forEach(losSustantivos => {
    getExtension(losPronombres, losAdjetivos, losSustantivos);
  });
};

const getAdj = losPronombres => {
  adj.forEach(losAdjetivos => {
    getNoun(losPronombres, losAdjetivos);
  });
};

pronoun.forEach(losPronombres => {
  getAdj(losPronombres);
});
