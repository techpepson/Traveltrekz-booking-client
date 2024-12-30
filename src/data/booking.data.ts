//booking data

export const personalDetails = [
  {
    title: "First Name",
    placeholder: "Enter your first name",
    name: "bookingClientFirstName",
  },
  {
    title: "Last Name",
    placeholder: "Enter your last name",
    name: "bookingClientLastName",
  },
  {
    title: "Email",
    placeholder: "Enter your email",
    name: "bookingClientEmail",
  },
  {
    title: "Phone Number",
    placeholder: "Enter phone number",
    name: "bookingClientPhone",
  },
  {
    title: "Country",
    placeholder: "Enter your country",
    name: "bookingClientCountry",
  },
];

export const bookingInfo = [
  { title: "Expected Start Date", name: "bookingStartDate" },
  { title: "Expected End Date", name: "bookingEndDate" },
  { title: "How many persons are coming in?", name: "bookingPersons" },
  { title: "How many rooms are you booking?", name: "numberOfRooms" },
  { title: "Select Your Arrival time", name: "arrivalTime" },
];

export const bookingExtras = [
  {
    title: "Add to your stay",
    extras: [
      {
        title: "I'm interested in renting a car with 10% discount",
        desc: "Save 10% on all rental cars when you book with us – we'll add car rental options to your booking confirmation.",
      },
      {
        title: "Want to book a taxi or shuttle ride in advance?",
        desc: "Avoid surprises – get from the airport to your accommodations without any hassle. We'll add taxi options to your booking confirmation.",
      },
    ],
  },
];

export const paymentInfo = [
  {
    name: "Calculated price",
    desc: "Below is the calculated amount to be paid",
  },
];
