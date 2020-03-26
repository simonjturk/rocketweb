import validate from 'validate.js';
export function validateForm(formName, constraints) {



    var formSelector = "form#" + formName;
    var form = document.querySelector(formSelector);

    //get the submit button
    var elements = getElementsByAttrib('type="submit"');
    var submitButton = elements[0];


    // Hook up the form so we can prevent it from being posted
    form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        handleFormSubmit(form);
    });

    // Hook up the inputs to validate on the fly
    var inputs = form.querySelectorAll("input, textarea, select")
    for (var i = 0; i < inputs.length; ++i) {
        inputs.item(i).addEventListener("keyup", function (ev) {
            var errors = validate(form, constraints) || {};
            showErrorsForInput(this, errors[this.name]);
            formValid(errors);
        });
    }

    function formValid(errors) {
        if (Object.entries(errors).length > 0) {


            submitButton.disabled = true;
            submitButton.classList.add("button-disabled");
        } else {
            submitButton.disabled = false;
            submitButton.classList.remove("button-disabled");
        }
    }

    function getElementsByAttrib(attrib) {
        return form.querySelectorAll('[' + attrib + ']');
    }

    function handleFormSubmit(form, input) {
        // validate the form against the constraints
        var errors = validate(form, constraints);
        // then we update the form to reflect the results
        showErrors(form, errors || {});
        if (!errors) {
            showSuccess();
        }
    }

    // Updates the inputs with the validation errors
    function showErrors(form, errors) {
        // We loop through all the inputs and show the errors for that input

        form.querySelectorAll("input[name], select[name]").forEach(input => {
            // Since the errors can be null if no errors were found we need to handle
            // that
            showErrorsForInput(input, errors && errors[input.name]);
        });

        // _.each(form.querySelectorAll("input[name], select[name]"), function (input) {
        // Since the errors can be null if no errors were found we need to handle
        // that
        //     showErrorsForInput(input, errors && errors[input.name]);
        // });
    }

    // Shows the errors for a specific input
    function showErrorsForInput(input, errors) {
        //if it's the bot-field, we don't care about it
        // if (input.name === "bot-field") {
        //     return;
        // }

        // This is the root of the input
        var formGroup = closestParent(input.parentNode, "form-group")
        // Find where the error messages will be insert into

        if (!formGroup) {
            return;
        }

        var messages = formGroup.querySelector(".messages");
        // First we remove any old messages and resets the classes
        resetFormGroup(formGroup);
        // If we have errors
        if (errors) {
            // we first mark the group has having errors
            formGroup.classList.add("has-error");
            // then we append all the errors

            errors.forEach(error => {
                addError(messages, error);
            });
            // errors.foreach(errors, function (error) {
            //     addError(messages, error);
            // });
        } else {
            // otherwise we simply mark it as success
            formGroup.classList.add("has-success");
        }
    }

    // Recusively finds the closest parent that has the specified class
    function closestParent(child, className) {
        if (!child || child == document) {
            return null;
        }
        if (child.classList.contains(className)) {
            return child;
        } else {
            return closestParent(child.parentNode, className);
        }
    }

    function resetFormGroup(formGroup) {
        // Remove the success and error classes
        formGroup.classList.remove("has-error");
        formGroup.classList.remove("has-success");
        // and remove any old messages
        formGroup.querySelectorAll(".help-block.error").forEach(el => {
            el.parentNode.removeChild(el);
        });
        //.each(formGroup.querySelectorAll(".help-block.error"), function (el) {
        //     el.parentNode.removeChild(el);
        // });
    }

    // Adds the specified error with the following markup
    // <p class="help-block error">[message]</p>
    function addError(messages, error) {
        var block = document.createElement("p");
        block.classList.add("help-block");
        block.classList.add("error");
        block.innerText = error;
        messages.appendChild(block);
    }

    function showSuccess() {
        // We made it \:D/
        // alert("Success!");

        form.submit();
    }

}