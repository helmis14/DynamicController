import { checkSchema, validationResult } from "express-validator";

class InputValidation {
  validate = async (schema) => {
    return [
      checkSchema(schema),
      (req, res, next) => {
        try {
          const results = validationResult(req);

          if (!results.isEmpty()) {
            throw new Error(results.array());
          }

          next();
        } catch (error) {
          return res.status(400).json({
            status: false,
            message: "INPUT_ERROR",
            error: error.message,
          });
        }
      },
    ];
  };
}

export default new InputValidation
