// import models
import Artist from '../models/Artist.js';
import Release from '../models/Release.js';
import Label from '../models/Label.js';
import axios from 'axios';
import fs from 'fs';

 //*** this is too hard lol */

const base = "https://api.discogs.com";
const head = {
    headers: {
        'User-Agent': `reSearchDiscogs/1.0 +https://github.com/jwow1000/SoundProject_api`
    }
}
// fetch call for search, reuturn json object
const fetchReleases = async (labelNum) => {
    // get label info
    const label = await axios.get(
        `${base}/labels/${labelNum}`,
        head
    );
    console.log(label.data);

    // get 20 releases
    const releases = await axios.get(
        `${base}/labels/${labelNum}/releases?page=3&per_page=20&sort=year&sort_order=asc`,
        head
    );
    // make array of release id's

    // set search results with the data
    console.log(releases.data);
};

// metalheadz
fetchReleases(128);
