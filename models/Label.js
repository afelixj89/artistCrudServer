import mongoose from 'mongoose';

const labelsSchema = new mongoose.Schema({
    "id": Number,
    "name": {type: String},
    "resource_url": {type: String},
    "uri": {type: String},
    "profile": {type: String},
    "releases": [Number]

});

export default mongoose.model('labels', labelsSchema);
