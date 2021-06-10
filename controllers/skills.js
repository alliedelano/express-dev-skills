const Skill = require('../models/skill')

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update
}

function update(req, res){
    const skill = Skill.getOne(req.params.id);
    Skill.updateOne(req.body);
    res.redirect('/skills');
}

function edit(req, res){
    const skill = Skill.getOne(req.params.id)
    res.render('skills/edit', {
        skill: skill
    })
}

function deleteSkill(req, res){
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}

function create(req, res){
    Skill.create(req.body);
    res.redirect('/skills');
}

function newSkill(req, res){
    res.render('skills/new');
}

function index(req, res){
    
    const skillsList = Skill.getAll()
    
    res.render('skills/index', {
        skills: skillsList
    })
};

function show(req, res){

    const skill = Skill.getOne(req.params.id);

    res.render('skills/show', {
        skill: skill
    });
}