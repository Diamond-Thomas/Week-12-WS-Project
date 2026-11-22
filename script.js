function validateName(name){
  const nameRequirements = /^[a-zA-Z\s]{2,}$/;
  return nameRequirements.test(name);
}

function validateUsername(username){
  const usernameRequirements = /^\w{3,12}$/;
  return usernameRequirements.test(username);
}
function validatePhone(phone){
  const phoneRequirements = /^\d{3}[-.]?\d{3}[-.]?\d{4}$/;
  return phoneRequirements.test(phone);
}
function validatePromoCode(promo) {
  const promoRequirements = /^summer$/i;
  return promoRequirements.test(promo);
}
function formatPhoneNumber(phone){
const phoneRequirements = /^(\d{3})[-.]?(\d{3})[-.]?(\d{4})$/;
if (phoneRequirements.test(phone)) {
  return phone.replace(phoneRequirements, "($1) $2-$3");
}
}
function processRegistration(user){
  const errors = [];
  if (!validateName(user.name)) {
    errors.push("Invalid Name");
  }
  if (!validateUsername(user.username)) {
    errors.push("Invalid Username");
  }
  if (!validatePhone(user.phone)) {
    errors.push("Invalid Phone Number");
  }

  if (errors.length > 0) {
    return {
      success: false,
      errors: errors
    };
  }

  return {
    success: true,
    data: {
      name: user.name,
      username: user.username,
      phone: formatPhoneNumber(user.phone),
      discountApplied: validatePromoCode(user.promoCode)
    }
  };
}




const sampleUsers = [
  {
    name: "Alex Johnson",
    username: "alex_j",
    phone: "555-234-5678",
    promoCode: "SUMMER"
  },
  {
    name: "B", // Invalid name (too short)
    username: "cool_user_123",
    phone: "555.345.6789",
    promoCode: "summer"
  },
  {
    name: "Charlie Brown",
    username: "charlie!brown", // Invalid username (illegal character '!')
    phone: "5554567890",
    promoCode: "SUMMER2026" // Invalid promo code
  },
  {
    name: "Dana Scully",
    username: "da", // Invalid username (too short, min 3)
    phone: "555-567-8901",
    promoCode: "SuMmEr"
  },
  {
    name: "Edward Nygma",
    username: "the_riddler_super_fan", // Invalid username (too long, max 12)
    phone: "555-678-901", // Invalid phone (missing a digit)
    promoCode: null
  },
  {
    name: "Fiona Gallagher",
    username: "fiona_g",
    phone: "555-789-0123",
    promoCode: "" // No promo code provided
  }
];

console.log(validateName(sampleUsers[0].name));
console.log(validateUsername(sampleUsers[0].username));
console.log(validatePhone(sampleUsers[0].phone));
console.log(formatPhoneNumber(sampleUsers[0].phone));

console.log(validateName(sampleUsers[1].name));
console.log(validateUsername(sampleUsers[1].username));
console.log(validatePhone(sampleUsers[1].phone));
console.log(formatPhoneNumber(sampleUsers[1].phone));



for (const users of sampleUsers) {
  console.log(processRegistration(users));
}
