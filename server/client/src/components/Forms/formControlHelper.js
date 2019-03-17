
export const validateForm = (formFields, values) => {
    const errors = {};
    formFields.forEach((item) => {
        if (item.validations.emptyCheck && !values[item.name]) {
            errors[item.name] = item.label + " cannot be empty";
        }
        else if (item.validations.minLength && values[item.name] && values[item.name].length < item.validations.minLength) {
            errors[item.name] = "The Length Of "+ item.label + " must be more than " + item.validations.minLength;
        }
        else if (item.validations.maxLength && values[item.name] && values[item.name].length > item.validations.maxLength) {
            errors[item.name] = "The Length Of "+ item.label + " must be less than " + item.validations.maxLength;
        }

        // URL CHECK
        // EMAIL CHECK
    });
    return errors;
};

export const warnForm = (formFields, values) => {
    const warnings = {};
    formFields.forEach((item) => {
        if (item.warnings.emptyCheck && !values[item.name]) {
            warnings[item.name] = item.label + " should not be empty";
        }
        else if (item.warnings.minLength && values[item.name] && values[item.name].length < item.warnings.minLength) {
            warnings[item.name] = "The Length Of "+ item.label + " should be more than " + item.warnings.minLength;
        }
        else if (item.warnings.maxLength && values[item.name] && values[item.name].length > item.warnings.maxLength) {
            warnings[item.name] = "The Length Of "+ item.label + " should be less than " + item.warnings.maxLength;
        }
    });
    return warnings;
};