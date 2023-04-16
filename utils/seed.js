const mongoose = require('mongoose');
const db = require('../config/connection');

const userData = require('./usersData');
const thoughtData = require('./thoughtsData');

const { User, Thought } = require('../models');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Thought.deleteMany({});

    const createdUsers = await User.insertMany(userData);

    const updatedThoughts = thoughtData.map((thought, index) => {
      return {
        ...thought,
        userId: createdUsers[index % createdUsers.length]._id,
      };
    });

    await Thought.insertMany(updatedThoughts);

    console.log('Data seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
});




// const mongoose = require('mongoose');
// const User = require('../models/User');
// const Thought = require('../models/Thought');

// const usersData = require('./usersData');
// const thoughtsData = require('./thoughtsData');
// const reactionsData = require('./reactionsData');

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network-api', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// async function seedDatabase() {
//   try {
//     // Clear existing data
//     await User.deleteMany({});
//     await Thought.deleteMany({});

//     // Seed users and thoughts
//     const users = await User.create(usersData);
//     const thoughts = await Thought.create(thoughtsData);

//     // Seed reactions
//     for (let i = 0; i < thoughts.length; i++) {
//       const thought = thoughts[i];
//       const reactions = reactionsData.filter((reaction) => reaction.username === thought.username);
//       thought.reactions = reactions;
//       await thought.save();
//     }

//     console.log('Database seeded successfully');
//   } catch (err) {
//     console.error('Error seeding database:', err);
//   } finally {
//     mongoose.connection.close();
//   }
// }

// seedDatabase();