import mongoose from 'mongoose';

const artistsSchema = new mongoose.Schema({
    "name": [String],
    "uri": {type: String},
    "realname": {type: String},
    "profile": {type: String},
    "releases": [Number],
    "videos_url": [String]

});

export default mongoose.model('artists', artistsSchema);
