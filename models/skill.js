const skills = [
    {id: 123456, skill: 'HTML', comfortLevel: 'green', encountered: true},
    {id: 234567, skill: 'CSS', comfortLevel: 'green', encountered: true},
    {id: 345671, skill: 'JavaScript', comfortLevel: 'yellow', encountered: true},
    {id: 456701, skill: 'Git', comfortLevel: 'green', encountered: true},
    {id: 567123, skill: 'Github', comfortLevel: 'green', encountered: true},
    {id: 671432, skill: 'SQL', comfortLevel: 'red', encountered: false},
    {id: 721076, skill: 'Ruby', comfortLevel: 'red', encountered: false},
    {id: 890123, skill: 'Python', comfortLevel: 'red', encountered: false},
    {id: 901234, skill: 'Node', comfortLevel: 'yellow', encountered: true}, 
    {id: 012345, skill: 'Express.js', comfortLevel: 'yellow', encountered: true}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};

function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.comfortLevel = 'red';
    skill.encountered = false;
    skills.push(skill);
}

function getAll() {
    return skills;
};

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
}
