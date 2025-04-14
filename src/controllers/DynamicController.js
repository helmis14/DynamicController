class DynamicController {
  _model;

  constructor(model) {
    this._model = model;
  }

  index = async (req, res) => {
    try {
      const data = await this._model.find();

      return res.json({
        status: true,
        message: "DATA_FOUND",
        total: data.length,
        data,
      });
    } catch (error) {
      return res.status(400).json({
        status: false,
        message: "DATA_NOT_FOUND",
      });
    }
  };

  store = async (req, res) => {
    try {
      const data = await this._model.create(req.body);
      if (!data) {
        throw { message: "FAILED_STORE_DATA" };
      }

      return res.json({
        status: true,
        message: "SUCCESS_STORE_DATA",
        data,
      });
    } catch (error) {
      return res.status(400).json({
        status: false,
        message: error.message,
      });
    }
  };

  update = async (req, res) => {
    try {
      const data = await this._model.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      );
      if (!data) {
        throw { message: "FAILED_UPDATE_DATA" };
      }

      return res.json({
        status: true,
        message: "SUCCESS_UPDATE_DATA",
        data,
      });
    } catch (error) {
      return res.status(400).json({
        status: false,
        message: error.message,
      });
    }
  };

  show = async (req, res) => {
    try {
      const data = await this._model.findOne({ _id: req.params.id });
      if (!data) {
        throw { message: "DATA_NOT_FOUND" };
      }

      return res.json({
        status: true,
        message: "DATA_FOUND",
        data,
      });
    } catch (error) {
      return res.status(400).json({
        status: false,
        message: error.message,
      });
    }
  };

  delete = async (req, res) => {
    try {
      const data = await this._model.findOneAndDelete({ _id: req.params.id });
      if (!data) {
        throw { message: "FAILED_DELETE_DATA" };
      }

      return res.json({
        status: true,
        message: "SUCCESS_DELETE_DATA",
        data,
      });
    } catch (error) {
      return res.status(400).json({
        status: false,
        message: error.message,
      });
    }
  };
}

export default DynamicController;
