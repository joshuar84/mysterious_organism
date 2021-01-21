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

const pAequorFactory = (number, arrayOfDNA) => {
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
      console.log(`Specimen #${ourSpecNum}\nSpecimen #${theirSpecNum}n\
      have ${samePercent}% DNA in common.`);
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
      if (gPolish >= percent) {
        return true, `The specimen contains:\n${gPolish * 100}% G bases\n${cPolish * 100}% C bases\nThe specimen will likely survive.`;
      } else if (cPolish >= percent) {
        return true, `The specimen contains:\n${cPolish * 100}% C bases\n${gPolish * 100}% G bases\nThe specimen will likely survive.`;
      } else if (cPolish < percent && gPolish < percent) {
        return false, `The specimen contains:\n${cPolish * 100}% C bases\n${gPolish * 100}% G bases\nThe specimen will not likely survive.`;
      }
    },


  };
};

const orgNum1 = pAequorFactory(1, mockUpStrand());
const orgNum2 = pAequorFactory(2, mockUpStrand());
const orgNum3 = pAequorFactory(3, mockUpStrand());
const orgNum4 = pAequorFactory(4, mockUpStrand());
const orgNum5 = pAequorFactory(5, mockUpStrand());
const orgNum6 = pAequorFactory(6, mockUpStrand());
const orgNum7 = pAequorFactory(7, mockUpStrand());
const orgNum8 = pAequorFactory(8, mockUpStrand());
const orgNum9 = pAequorFactory(9, mockUpStrand());
const orgNum10 = pAequorFactory(10, mockUpStrand());
const orgNum11 = pAequorFactory(11, mockUpStrand());
const orgNum12 = pAequorFactory(12, mockUpStrand());
const orgNum13 = pAequorFactory(13, mockUpStrand());
const orgNum14 = pAequorFactory(14, mockUpStrand());
const orgNum15 = pAequorFactory(15, mockUpStrand());
const orgNum16 = pAequorFactory(16, mockUpStrand());
const orgNum17 = pAequorFactory(17, mockUpStrand());
const orgNum18 = pAequorFactory(18, mockUpStrand());
const orgNum19 = pAequorFactory(19, mockUpStrand());
const orgNum20 = pAequorFactory(20, mockUpStrand());
const orgNum21 = pAequorFactory(21, mockUpStrand());
const orgNum22 = pAequorFactory(22, mockUpStrand());
const orgNum23 = pAequorFactory(23, mockUpStrand());
const orgNum24 = pAequorFactory(24, mockUpStrand());
const orgNum25 = pAequorFactory(25, mockUpStrand());
const orgNum26 = pAequorFactory(26, mockUpStrand());
const orgNum27 = pAequorFactory(27, mockUpStrand());
const orgNum28 = pAequorFactory(28, mockUpStrand());
const orgNum29 = pAequorFactory(29, mockUpStrand());
const orgNum30 = pAequorFactory(30, mockUpStrand());

const arrayOfOrganisms = [orgNum1, orgNum2, orgNum3, orgNum4, orgNum5, orgNum6, orgNum7, orgNum8, orgNum9, orgNum10, orgNum11, orgNum12, orgNum13, orgNum14, orgNum15, orgNum16, orgNum17, orgNum18, orgNum19, orgNum20, orgNum21, orgNum22, orgNum23, orgNum24, orgNum25, orgNum26, orgNum27, orgNum28, orgNum29, orgNum30];
const dnaNum1 = orgNum4.dna;
console.log(orgNum1.willLikelySurvive(dnaNum1, 0.6));