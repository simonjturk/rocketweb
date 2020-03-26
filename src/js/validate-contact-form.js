import { validateForm } from "./form-validate.js";

// These are the constraints used to validate the form
var constraints = {
    email: {
        // Email is required
        presence: { message: "is required" },
        // and must be an email (duh)
        email: { message: "is not valid" }
    },
    firstName: {
        //is required
        presence: { message: "is required" }

    },
    lastName: {
        //is required
        presence: { message: "is required" }

    },
    message: {
        //is required
        presence: { message: "is required" }

    }
};
validateForm("contact", constraints);