export default function validate(values) {
    let errors = {};

    if (!values.firstname.trim()) {
        errors.firstname = "First Name required";
    }

    if (!values.lastname.trim()) {
        errors.lastname = "Last Name required";
    }

    if (!values.email) {
        errors.email = "Email required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email address is invalid";
    }
    return errors;
}