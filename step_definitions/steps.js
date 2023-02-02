const { obitPage } = inject();
const r_ship = Math.floor(Math.random() * 5) + 1;
const { I } = inject();

// Add in your custom step files

Given("I am on a Janus Obituary page", () => {
  // From "features/janus.feature" {"line":6,"column":3}
  I.amOnPage(
    "/us/obituaries/chicagotribune/name/virginia-gruchalski-obituary?pid=196167379"
  );
});

Then("I should see a name in the heading", () => {
  I.see("Virginia", obitPage.nameHeader);
});

Given("I'm on a Janus Obituary page", () => {
  I.amOnPage(
    "/us/obituaries/chicagotribune/name/virginia-gruchalski-obituary?pid=196167379"
  );
});

When("I scroll to the guestbook section of the page", () => {
  I.scrollIntoView(obitPage.guestBook);
});

Then("I should be able to add a new entry to the guestbook", () => {
  obitPage.createGuestBookEntry(
    "Sorry for your loss",
    r_ship,
    "Duran",
    "dthomas@qualityworkscg.com"
  );
});

let data;
Given("I access an endpoint", async () => {
  data = await I.getJanusPersonRecord();
});

Then("I should receive data from that endpoint", () => {
  console.log(data.recordset);
});
