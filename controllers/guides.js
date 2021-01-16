const Guide = require('../models/guide');

module.exports = {
    create,
    getGuides,
    delete: deleteGuide,
    update,
    edit
};

async function create(req, res) {
    const guide = new Guide(req.body);
    try {
        await guide.save();
        res.json({ guide })
    } catch (err) {
        res.json({err});
    }
}

async function getGuides(req, res) {
    const guides = await Guide.find({})
    res.json(guides);
}

function deleteGuide(req, res) {
    Guide.findByIdAndDelete(req.params.id, function(err, guide) {
        try {
            guide
            .remove({ _id: req.params.id })
            .then(data => {
                res.json(data);
            });
        } catch (err) {
            console.log(err);
        }
    });
}

async function edit(req, res) {
    const guide = await Guide.findById(req.params.id)
    res.json(guide)
}

function update(req, res) {
    Guide.findByIdAndUpdate(req.params.id, {
        new: true,
        name: req.body.name,
        type: req.body.type,
        role: req.body.role,
        champion: req.body.champion,
        items: req.body.items,
        runes: req.body.runes,
        abilities: req.body.abilities,
    }, function(err, guide) {
            res.json(guide)
    })
}