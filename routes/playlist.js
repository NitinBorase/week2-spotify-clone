const express = require("express");
const passport = require("passport");
const router = express.Router();
const Playlist = require("../models/Playlist");
const User = require("../models/User");
const Song = require("../models/Song");

router.post("/create",passport.authenticate("jwt", { session: false }), async (req, res) => {
    const currentUser = req.user;
    const {name, thumbnail, songs} = req.body;
    if(!name || !thumbnail || !songs) {
        return res.status(301).json({err:"Insufficient Data"});
    }
    const playlistData = {
        name,
        thumbnail,
        songs,
        owner: currentUser._id,
        collacollaborators: [],
    };
    const playlist = await playlist.create(playlistData);
    return res.status(200).json(playlist);
});

router.get("/get/playlist/:playlistId", passport.authenticate("jwt",{session:false}), async (req,res) =>{
    const playlistId = req.params.playlistId;
    const playlist = await playlist.findOne({_id: playlistId});
    if(!playlist) {
        return res.status(404).json({error: "Playlist not found"});
    }
    return res.status(200).json(playlist);
});

router.get("/get/artist/:artistId", passport.authenticate("jwt",{session:false}), async (req,res) =>{
    const artistId = req.params.artistId;
    const artist = await User.findOne({_id: artistId});
    if(!artist) {
        return res.status(404).json({error: "Artist not found"});
    }
    const playlists = await playlist.find({owner:artistId});
    return res.status(200).json({data: playlists})
});

router.post("/add/song", passport.authenticate("jwt",{session:false}), async (req,res) =>{
    const currentUser = req.user;
    const {playlistId, songId} = req.body;
    const playlist = await playlist.findOne({_id: playlistId});
    if(!playlist) {
        return res.status(404).json({error: "Playlist not found"});s
    }
    if(playlist.owner.equals(currentUser._id) && !playlist.collaborators.includes(currentUser._id)) {
        return res.status(401).json({error: "Unauthorized"});
    }
    const song = await Song.findOne({_id: songId});
    if(!song) {
        return res.status(404).json({error: "Song not found"});
    }
    playlist.songs.push(songId);
    await playlist.save();

    return res.status(200).json(playlist);
});

module.exports = router;