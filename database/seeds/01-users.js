exports.seed = function(knex) {
  return knex("users").then(function() {
    return knex("users").insert([
      { id: 20, username: "David", password: "pass" },
      { id: 21, username: "Jay", password: "pass" },
      { id: 22, username: "Paul", password: "pass" }
    ]);
  });
};
