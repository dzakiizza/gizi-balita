const { responseHandler } = require("../utils/responseHandler");
const { errorMessage } = require("../utils/errorMessage");
const { IndeksUmur, GiziBalita } = require("../models");
const {
  giziBalitaBB,
  giziBalitaPB,
  giziBalitaIMT,
} = require("../utils/giziBalita.service");

class GiziBalitaController {
  static async findAllBBPBIMT(req, res, next) {
    try {
      if (req.body.umur > 60) {
        next(
          errorMessage(400, "Error", "Umur tidak boleh lebih dari 60 bulan")
        );
      }
      const dataInput = {
        umur: Math.abs(req.body.umur),
        gender: req.body.gender,
        weight: Math.abs(req.body.weight),
        height: Math.abs(req.body.height),
      };
      const dataBB = await IndeksUmur.findAll({
        where: { umur: req.body.umur, gender: req.body.gender, indeks: "bb" },
        raw: true,
      });
      const dataPB = await IndeksUmur.findAll({
        where: { umur: req.body.umur, gender: req.body.gender, indeks: "pb" },
        raw: true,
      });
      const dataIMT = await IndeksUmur.findAll({
        where: { umur: req.body.umur, gender: req.body.gender, indeks: "imt" },
        raw: true,
      });
      const resultBB = giziBalitaBB(dataInput, dataBB[0]);
      const resultPB = giziBalitaPB(dataInput, dataPB[0]);
      const resultIMT = giziBalitaIMT(dataInput, dataIMT[0]);

      const allResult = { BB_U: resultBB, PB_U: resultPB, IMT_U: resultIMT };
      return responseHandler(res, 200, allResult);
    } catch (error) {
      next(errorMessage(400, error, error.message));
    }
  }

  static async createGiziBalita(req, res, next) {
    try {
      if (req.body.umur > 60) {
        next(
          errorMessage(400, "Error", "Umur tidak boleh lebih dari 60 bulan")
        );
      }
      const dataInput = {
        umur: Math.abs(req.body.umur),
        gender: req.body.gender,
        weight: Math.abs(req.body.weight),
        height: Math.abs(req.body.height),
      };
      const dataBB = await IndeksUmur.findAll({
        where: { umur: req.body.umur, gender: req.body.gender, indeks: "bb" },
        raw: true,
      });
      const dataPB = await IndeksUmur.findAll({
        where: { umur: req.body.umur, gender: req.body.gender, indeks: "pb" },
        raw: true,
      });
      const dataIMT = await IndeksUmur.findAll({
        where: {
          umur: req.body.umur,
          gender: req.body.gender,
          indeks: "imt",
        },
        raw: true,
      });
      const resultBB = giziBalitaBB(dataInput, dataBB[0]);
      const resultPB = giziBalitaPB(dataInput, dataPB[0]);
      const resultIMT = giziBalitaIMT(dataInput, dataIMT[0]);

      const allResult = {
        ...dataInput,
        bb_u: resultBB,
        pb_u: resultPB,
        imt_u: resultIMT,
      };
      const payload = await GiziBalita.create(allResult);
      return responseHandler(res, 200, payload);
    } catch (error) {
      next(errorMessage(400, error, error.message));
    }
  }

  static async updateGiziBalita(req, res, next) {
    try {
      const updatedData = await GiziBalita.update(req.body, {
        where: { id: req.params.id },
      });
      return responseHandler(res, 200, updatedData);
    } catch (error) {
      next(errorMessage(400, error, error.message));
    }
  }

  static async deleteGiziBalita(req, res, next) {
    try {
      const deletedData = await GiziBalita.destroy({
        where: { id: req.params.id },
      });
      return responseHandler(res, 200, deletedData);
    } catch (error) {
      next(errorMessage(400, error, error.message));
    }
  }
}

module.exports = GiziBalitaController;
