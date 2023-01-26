const { obitPage } = inject();
// Genrrates a random number between 1 and 5
const r_ship = Math.floor(Math.random() * 5) + 1;

Feature("Guestbook");

Scenario("I can verify that I am on the correct obit", ({ I, obitPage }) => {
  // Given I am on a Janus obituary page
  I.amOnPage(
    "/us/obituaries/chicagotribune/name/virginia-gruchalski-obituary?pid=196167379"
  );
  // Then I should see her name in the heading
  I.see("Virginia", obitPage.nameHeader);
});

Scenario.only("I can add an entry to the guestbook", ({ I }) => {
  // Given I am on a Janus obituary page
  I.amOnPage(
    "/us/obituaries/chicagotribune/name/virginia-gruchalski-obituary?pid=196167379"
  );
  // When I scroll to her guestbook
  I.scrollIntoView(obitPage.guestBook);
  // Then I should be able to add an entry to the guestbook
  obitPage.createGuestBookEntry(
    "Sorry for your loss",
    r_ship,
    "Duran",
    "dthomas@qualityworkscg.com"
  );
});

Scenario("I can get data from endpoint", async ({ I }) => {
  let data = await I.getJanusPersonRecord();
  console.log(data.recordset);
});
