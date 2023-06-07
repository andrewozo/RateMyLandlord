const {
  db,
  models: { User, Landlord },
} = require("../server/db");

const seed = async () => {
  await db.sync({ force: true });
  console.log("db synced");

  await Promise.all([
    User.create({
      username: "andrewozo",
      password: "123",
      firstname: "Andrew",
      lastname: "Ozoria",
    }),
    User.create({
      username: "Spongebob",
      password: "123",
      firstname: "Spongebob",
      lastname: "squarepants",
    }),
    await Landlord.create({
      landlordName: "Mr Krabs",
      address: "123 Bikini Bottom",
      comments: "Mr Krabs is cheap",
      rating: 2,
      postBy: "SpongeBob Squarepants",
    }),
    await Landlord.create({
      landlordName: "Stewie Griffin",
      address: "123 Main Street",
      comments:
        "keeps on telling me what the deuce everytime i come to him with a problem",
      rating: 3,
      postBy: "Andrew Ozoria",
    }),
  ]);

  console.log("seeded users successfully");
};

async function runSeed() {
  console.log("seeding....");
  try {
    await seed();
  } catch (error) {
    console.log(error);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

if (module === require.main) {
  runSeed();
}

module.exports = seed;
