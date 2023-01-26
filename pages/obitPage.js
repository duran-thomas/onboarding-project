const { I } = inject();

module.exports = {
  // insert your locators and methods here
  fields: {
    messageBox: "textarea[name=_GuestbookForm_Message]",
    nameField: "input[name=_GuestbookForm_From]",
    emailField: "input[name=_GuestbookForm_Email]",
  },
  submitBtn:
    "div.Box-sc-ucqo0b-0.cbNzut > div.Box-sc-ucqo0b-0.Flex-sc-d1l2vy-0.fsrkdX > button",
  // Clicks a button to select relationship.
  r_shipBtn: (index) =>
    `div.Box-sc-ucqo0b-0.jjAWvY > div > div:nth-child(${index}) > button`,
  nameHeader: ".Heading-sc-4h3nqe-0",
  guestBook: "#guestbook",

  // Function to create a new guestbook entry
  createGuestBookEntry(message, index, name, email) {
    I.fillField(this.fields.messageBox, message);
    I.click(this.r_shipBtn(index));
    I.fillField(this.fields.nameField, name);
    I.fillField(this.fields.emailField, email);
    I.click(this.submitBtn);
  },
};
