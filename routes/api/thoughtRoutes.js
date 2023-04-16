const router = require('express').Router();

const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require('../../controllers/thoughtController');

console.log('getAllThoughts', getAllThoughts);
console.log('getThoughtById', getThoughtById);
console.log('createThought', createThought);
console.log('updateThought', updateThought);
console.log('deleteThought', deleteThought);
console.log('addReaction', addReaction);
console.log('deleteReaction', deleteReaction);

router.route('/').get(getAllThoughts).post(createThought);
router.route('/:id').get(getThoughtById).put(updateThought).delete(deleteThought);
router.route('/:thoughtId/reactions').post(addReaction);
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;