// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const randNum = () => {
  const firstDigit = Math.floor(Math.random() * 10);
  const secondDigit = Math.floor(Math.random() * 10);
  const randNum =  `${firstDigit}${secondDigit}`
  return parseInt(randNum, 10);
}

const pAequorFactory = (arrayOfDNA, number = randNum()) => {
  return {

    specimenNum: number,
    dna: arrayOfDNA,

    mutate() {
      const array = this.dna;
      const dNALength = this.dna.length;
      const randIndex = Math.floor(Math.random() * dNALength);
      let randBase = returnRandBase();
      while (array[randIndex] === randBase) {
        randBase = returnRandBase();
      };
      array[randIndex] = randBase;
      return array;
    },

    compareDNA(pAequor) {
      const ourDNAArray = this.dna;
      const theirDNAArray = pAequor.dna;
      const ourSpecNum = this.specimenNum;
      const theirSpecNum = pAequor.specimenNum;
      const avgLength = (ourDNAArray.length + theirDNAArray.length) / 2;
      let simularities = 0;
      ourDNAArray.forEach((elem, i) => {
        let oElem = theirDNAArray[i];
        if (elem === oElem) {
          simularities++;
        };
      });
      const samePercent = ((simularities / avgLength) * 100).toPrecision(2);
      console.log(`Specimen #${ourSpecNum} and Specimen #${theirSpecNum} have ${samePercent}% DNA in common.`);
    },

    willLikelySurvive(dnaArray, percent = 0.6) {
      const length = dnaArray.length;
      let cCount = 0;
      let gCount = 0;
      dnaArray.forEach((base) => {
        if (base === 'G') {
          gCount++;
        } else if (base === 'C') {
          cCount++;
        }
      });
      const cPercent = cCount / length;
      const gPercent = gCount / length;
      const gPolish = gPercent.toPrecision(2);
      const cPolish = cPercent.toPrecision(2)
      if (gPolish >= percent || cPolish >= percent) {
        return true;
      } else {
        return false;
      }
    },

    complementStrand(arrayOfDNA) {
      const result = arrayOfDNA.map((el) => {
        if (el === "A") {
          return "T";
        } else if (el === "T") {
          return "A";
        } else if (el === "G") {
          return "C";
        } else if (el === "C")  {
          return "G";
        } else {
          return el;
        }
      });
      return result;
    },

  };
};

const find30 = (rdStrand, maker) => {
  let arrayOf30Obj = [];
  let count = 0;
  while (count < 30) {
    let organism = maker(randNum(), rdStrand())
    if (organism.willLikelySurvive(organism.dna)) {
      arrayOf30Obj.push(organism);
      count++;
    };
  };
  return arrayOf30Obj
};

// const thirtyThrivers = find30(mockUpStrand, pAequorFactory);
// console.log(thirtyThrivers);
// const [thriver1, thriver2, thriver3, thriver4, thriver5, thriver6, thriver7, thriver8, thriver9, thriver10, thriver11, thriver12, thriver13, thriver14, thriver15, thriver16, thriver17, thriver18, thriver19, thriver20, thriver21, thriver22, thriver23, thriver24, thriver25, thriver26, thriver27, thriver28, thriver29, thriver30] = thirtyThrivers;

const pAequor1 = pAequorFactory(mockUpStrand(), 1);
console.log(pAequor1, pAequor1.complementStrand(pAequor1.dna));