import mongoose from 'mongoose';

/**
 * @desc Create car Schema
 */
const RobberySchema = new mongoose.Schema({
    title: { type: String, required: true },
    context: { type: String, required: true },
    team: { type: String, required: true },
    goal: { type: String, required: true },
    details1Val: { type: Number, required: true },
    details1Text: { type: String, required: true },
    details2Val: { type: Number, required: true },
    details2Text: { type: String, required: true },
    details3Val: { type: Number, required: true },
    details3Text: { type: String, required: true },
});

/**
 * @desc Create User Model
 */
const RobberyModel = mongoose.model('Robbery', RobberySchema);

export default RobberyModel;