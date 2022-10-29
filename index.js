const d = document;
let classes = (classes) => document.getElementsByClassName(classes);

const form = d.querySelector(".form");
const fname = d.forms["form"]["fname"];
const lname = d.forms["form"]["lname"];
const email = d.forms["form"]["email"];
const govtid = d.forms["form"]["govtid"];
const dateA = d.forms["form"]["dateA"];
const dateD = d.forms["form"]["dateD"];
const country = d.forms["form"]["country"];
const nperson = d.forms["form"]["nperson"];
const request = d.forms["form"]["request"];
const payment = d.forms["form"]["payment"];
const submitBtn = d.querySelector(".form button");

window.addEventListener("load", focusElements);
form.onsubmit = function () {
      return validate();
};

// validate inputs form
const validate = () => {
      const fnameValue = fname.value.trim();
      const lnameValue = lname.value.trim();
      const emailValue = email.value.trim();
      const govtidValue = govtid.value.trim();
      const dateAValue = dateA.value.trim();
      const dateDValue = dateD.value.trim();
      const countryValue = country.value.trim();
      const npersonValue = nperson.value.trim();
      const requestValue = request.value.trim();
      const paymentValue = payment.value.trim();

      // Check first name
      if (fnameValue === "") {
            setMessage(fname, "red", "first name is required");
            return false;
      } else {
            setMessage(fname, "green");
      }
      // Check last name
      if (lnameValue === "") {
            setMessage(lname, "red", "last name is required");
            return false;
      } else {
            setMessage(lname, "green");
      }

      // Check email
      if (emailValue === "") {
            setMessage(email, "red", "Email is required");

            return false;
      }
      if (!isValidEmail(emailValue)) {
            setMessage(email, "red", "invalid email");

            return false;
      } else {
            setMessage(email, "green");
      }

      // Check govt issue id
      if (govtidValue === "") {
            setMessage(govtid, "red", "Id is required");
            return false;
      } else {
            setMessage(govtid, "green");
      }
      
      // Check date of arrival
      if (dateAValue === "") {
            setMessage(dateA, "red", "date of arrival is required");
            return false;
      } else {
            setMessage(dateA, "green");
      }
      
      // Check date of departure
      if (dateDValue === "") {
            setMessage(dateD, "red", "date of departure is required");
            return false;
      } else {
            setMessage(dateD, "green");
      }
      
      // Check country
      if (countryValue === "") {
            setMessage(country, "red", "country is required");
            return false;
      } else {
            setMessage(country, "green");
      }
      
      // Check number of person
      if (npersonValue === "") {
            setMessage(nperson, "red", "number of person required");
            return false;
      } else {
            setMessage(nperson, "green");
      }
      
      // Check request
      if (requestValue === "") {
            setMessage(request, "red", "type 'No Request' if don't have any");
            return false;
      } else {
            setMessage(request, "green");
      }
      
      // Check payment
      if (paymentValue === "") {
            setMessage(payment, "red", "payment is required");
            return false;
      } else {
            setMessage(payment, "green");
      }
};

// check the Email input with Regex
const isValidEmail = (email) => {
      const emailRegex =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      // convert to string than lower case then test the email
      return emailRegex.test(String(email).toLowerCase());
};

// set message(Error or Success)
const setMessage = (input, color, message) => {
      // get small tag from HTML
      const smallTag = input.parentElement.querySelector("small");

      input.style.borderColor = color;
      smallTag.style.color = color;
      smallTag.textContent = message;

};

// focus on the next input when Enter key pressed
function focusElements() {
      let inputs = document.querySelectorAll("input");
      for (var i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener("keypress", function (e) {
                  if (e.which == 13) {
                        e.preventDefault();
                        var nextInput = document.querySelectorAll(
                              '[tabIndex="' + (this.tabIndex + 1) + '"]'
                        );
                        if (nextInput.length === 0) {
                              nextInput = document.querySelectorAll('[tabIndex="1"]');
                        }
                        nextInput[0].focus();
                  }
            });
      }
}