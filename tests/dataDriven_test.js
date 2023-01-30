let data = new DataTable(["url", "statusCode"]);
data.add([
  "/us/obituaries/chicagotribune/name/virginia-gruchalski-obituary?pid=196167379",
  "200",
]);
data.add([
  "/us/obituaries/chicagotribune/name/virginia-gruchalski-obituary?pid=098734232",
  "404",
]);

var assert = require("assert");
Feature("Data Driven");

Scenario("I can verify the URL returns a status code of 404", async ({ I }) => {
  let res = await I.sendGetRequest(
    "/us/obituaries/chicagotribune/name/virginia-gruchalski-obituary?pid=098734232"
  );
  assert.equal(res.status, 404);
});

Data(data).Scenario(
  "I can verify the URL status code using a Data Table",
  async ({ I, current }) => {
    let res = await I.sendGetRequest(current.url);
    assert.equal(res.status, current.statusCode);
  }
);
