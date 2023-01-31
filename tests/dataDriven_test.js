const assert = require("assert");

Feature("Data Driven");

Scenario("I can verify the URL returns a status code of 404", async ({ I }) => {
  // Given that I try to access an incorrect URL
  let res = await I.sendGetRequest(
    "/us/obituaries/chicagotribune/name/virginia-gruchalski-obituary?pid=098734232"
  );
  // Then I should receive a 404 status code from the API
  assert.equal(res.status, 404);
}).tag("@restAPI");

let data = new DataTable(["url", "statusCode"]);
data.add([
  "/us/obituaries/chicagotribune/name/virginia-gruchalski-obituary?pid=196167379",
  "200",
]);
data.add([
  "/us/obituaries/chicagotribune/name/virginia-gruchalski-obituary?pid=098734232",
  "404",
]);

Data(data)
  .Scenario(
    "I can verify the URL status code using a Data Table",
    async ({ I, current }) => {
      // Given that I try to access a URL
      let res = await I.sendGetRequest(current.url);
      // Then I should receive a 404 status code if the URL is correct and 404 if incorrect
      assert.equal(res.status, current.statusCode);
    }
  )
  .tag("@restAPI");
