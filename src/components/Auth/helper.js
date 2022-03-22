export const validateInputs = (values) => {
  const errors = {};

  const pwdRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  const emailRegex = /^\S+@\S+\.\S+$/;

  if (!values.email) {
    errors.email = "Email is required!";
  } else if (!emailRegex.test(values.email)) {
    errors.email = "Enter a valid email!";
  }

  if (!values.password) {
    errors.password = "Password is required!";
  } else if (!pwdRegex.test(values.password.trim())) {
    errors.password =
      "Password must be 6 characters long and contain atleast one letter and digit";
  }

  if (!values.fullName) {
    errors.fullName = "Can't be empty!";
  }

  if (!values.userName) {
    errors.userName = "Can't be empty, must be atleast 1 letter";
  }

  if (!values.confirmPassword || values.confirmPassword !== values.password) {
    errors.confirmPassword = "Passwords do not match";
  }

  return errors;
};

export const testCredentials = {
  email: "test@gmail.com",
  password: "test@123",
};
