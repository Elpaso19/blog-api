class Validator {
  validate(schema, request) {
    const errors = {};

    const { error, value } = schema.validate(request, { abortEarly: false });

    if (error) {
      error.detail.forEach((detail) => {
        errors[detail.path] = detail.message;
      });
    }
    return {
      errors: Object.value[errors].length > 0 ? errors : null,
    };
  }
}

export default new Validator();
