/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  //getDomainNameTest(pronoun, adj, noun, extension);
};

//const getDomainName = (pronoun, adj, noun, extension) => {
//pronoun.forEach(pronoun => {
//adj.forEach(adj => {
//noun.forEach(noun => {
//extension.forEach(extension => {
//const domainName = `${pronoun}${adj}${noun}${extension}`;
//console.log(domainName);
//});
//});
//});
//});
//};
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

//getDomainNameFinal(losPronombres, losAdjetivos, losSustantivos, lasExtensiones);

//const getDomainNameTest = (pronoun, adj, noun, extension) => {
//  const domainName = `${pronoun}${adj}${noun}${extension}`;
//  console.log(domainName);
//};

//const getExtension = (noun) => {
//extension.forEach((extension) => {
//getDomainNameTest(pronoun, adj, noun, extension);
//});
//};

//const getNoun = (adj) => {
//  noun.forEach((noun) => {
//    getExtension(noun);
//  });
//};

//const getAdj = (pronoun) => {
//  adj.forEach((adj) => {
//    getNoun(adj);
//  });
//};
//const getPronoun = (pronoun) => {
//pronoun.forEach((pronoun) => {
//  getAdj(pronoun);
//});
//};

//const getDomainName = (pronoun, adj, noun, extension) => {
//  pronoun.forEach((pronoun) => adj;
//  adj.forEach(getAdj);
//  noun.forEach(getNoun);
//  extension.forEach(getExtension);
//  const domainName = `${pronoun}${adj}${noun}${extension}`;
//  console.log(domainName);
//};

//const getPronoun = () => {
//  const pronoun = ["the", "our"];
//  pronoun.forEach(getAdj);
//  return pronoun;
//};
//const getAdj = () => {
// const adj = ["great", "big"];
//adj.forEach(getNoun);
//return adj;
//};
//const getNoun = () => {
//  const noun = ["jogger", "racoon"];
//  noun.forEach(getExtension);
//  return noun;
//};

//const getExtension = () => {
//  const extension = [".com", ".es"];
//  extension.forEach(getFinal);
// return extension;
//};

//const getFinal = (pronoun, adj, noun, extension) => {
//  const finalDomaineName = `${pronoun}${adj}${noun}${extension}`;
//  console.log(finalDomaineName);
//};

//const primerNivel = elementosDePrimerNivel => {
//  segundoNivel(elementosDePrimerNivel);
//};

//const segundoNivel = elementosdelPrimerNivel => {
//  const elementosDelSegundoNivel = [];
//  tercerNivel(); ////elementosDelSegundoNivel)
////return elementosdelPrimerNivel+elementosDelSegundoNivel;??
//};
