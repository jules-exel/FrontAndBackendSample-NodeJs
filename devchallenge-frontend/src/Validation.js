export default function validate(values) {
    let errors = {};
    if (!values.limit) {
        errors.limit = 'A number is required.';
    }
    else {
        if ((/^ [0-9]+$/).test(values.limit)) {
            errors.limit = 'Please enter a numerical value.'
        }
        else if (values.limit <= 1) {
            errors.limit = 'Please enter a numerical value greater than 1.'
        }
    } 
    return errors
};