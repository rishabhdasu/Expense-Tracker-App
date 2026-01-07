import moment from "moment";

export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^|s@]+$/;
  return regex.test(email);
};

export const validatePassword = (password) => {
  if (!password || password.length < 8) {
    return "Password must be at least 8 characters long.";
  }

  // 2. Check Uppercase
  if (!/[A-Z]/.test(password)) {
    return "Password must contain at least one uppercase letter.";
  }

  // 3. Check Number
  if (!/\d/.test(password)) {
    return "Password must contain at least one number.";
  }

  // 4. Check Special Character
  // eslint-disable-next-line no-useless-escape
  if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
    return "Password must contain at least one special character.";
  }

  return null; // No error means the password is valid!
};

export const getInitials = (name) => {
  if (!name) return "";

  const words = name.split(" ");
  let initials = "";

  for (let i = 0; i < Math.min(words.length, 2); i++) {
    initials += words[i][0];
  }
  return initials.toUpperCase();
};

export const addThousandsSeperator = (num) => {
  if (num == null || isNaN(num)) return;

  const [integerPart, fractionalPart] = num.toString().split(".");
  const formattedInteger = integerPart.replace(/\B(?=(\d{3}) + (?!\d))/g, ",");
  return fractionalPart
    ? `${formattedInteger}.${fractionalPart}`
    : formattedInteger;
};

export const prepareExpenseBarChartData = (data = []) => {
  const chartData = data.map((item) => ({
    month: moment(item?.date).format("Do MMM"),
    category: item?.category,
    amount: item?.amount,
  }));
  return chartData;
};

export const prepareIncomeBarChartData = (data = []) => {
  const sortedData = [...data].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );
  const chartData = sortedData.map((item) => ({
    month: moment(item?.date).format("Do MMM"),
    source: item?.source,
    amount: item?.amount,
  }));
  return chartData;
};
