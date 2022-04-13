/**
 * Format for gizi result
 * @param {Object} inputData - User Input
 * @param {Object} indexStatus - Index Status
 * @return {typeof {inputData: Object, indexStatus: Object}
 */

const giziBalitaBB = (inputData, indexStatus) => {
  let result;
  if (inputData.umur == indexStatus.umur) {
    if (inputData.weight < indexStatus.min3sd) {
      result = "Berat Badan Sangat Kurang";
      return result;
    } else if (
      inputData.weight >= indexStatus.min3sd &&
      inputData.weight < indexStatus.min2sd
    ) {
      result = "Berat Badan Kurang";
      return result;
    } else if (
      inputData.weight >= indexStatus.min2sd &&
      inputData.weight <= indexStatus.pls1sd
    ) {
      result = "Normal";
      return result;
    } else if (inputData.weight > indexStatus.pls1sd) {
      result = "Risiko Berat Badan Lebih";
      return result;
    }
  }
};

const giziBalitaPB = (inputData, indexStatus) => {
  let result;
  if (inputData.umur == indexStatus.umur) {
    if (inputData.height < indexStatus.min3sd) {
      result = "Sangat Pendek";
      return result;
    } else if (
      inputData.height >= indexStatus.min3sd &&
      inputData.height < indexStatus.min2sd
    ) {
      result = "Pendek";
      return result;
    } else if (
      inputData.height >= indexStatus.min2sd &&
      inputData.height <= indexStatus.pls3sd
    ) {
      result = "Normal";
      return result;
    } else if (inputData.height > indexStatus.pls3sd) {
      result = "Tinggi";
      return result;
    }
  }
};

const giziBalitaIMT = (inputData, indexStatus) => {
  let result;
  let imt = inputData.weight / Math.pow(inputData.height / 100, 2);
  if (inputData.umur == indexStatus.umur) {
    if (imt < indexStatus.min3sd) {
      result = "Gizi Buruk";
      return result;
    } else if (imt >= indexStatus.min3sd && imt < indexStatus.min2sd) {
      result = "Gizi Kurang";
      return result;
    } else if (imt >= indexStatus.min2sd && imt <= indexStatus.pls1sd) {
      result = "Gizi Baik";
      return result;
    } else if (imt > indexStatus.pls1sd && imt <= indexStatus.pls2sd) {
      result = "Berisiko Gizi Lebih";
      return result;
    } else if (imt > indexStatus.pls2sd && imt <= indexStatus.pls3sd) {
      result = "Gizi Lebih";
      return result;
    } else if (imt > indexStatus.pls3sd) {
      result = "Obesitas";
      return result;
    }
  }
};

module.exports = { giziBalitaBB, giziBalitaPB, giziBalitaIMT };
