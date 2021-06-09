const skills = [
    {id: 123456, skill: 'HTML', comfortLevel: 'green', encountered: true},
    {id: 234567, skill: 'CSS', comfortLevel: 'green', encountered: true},
    {id: 345678, skill: 'JavaScript', comfortLevel: 'yellow', encountered: true},
    {id: 456789, skill: 'Git', comfortLevel: 'green', encountered: true},
    {id: 567890, skill: 'Github', comfortLevel: 'green', encountered: true},
    {id: 678901, skill: 'SQL', comfortLevel: 'red', encountered: false},
    {id: 789012, skill: 'Ruby', comfortLevel: 'red', encountered: false},
    {id: 890123, skill: 'Python', comfortLevel: 'red', encountered: false},
    {id: 901234, skill: 'Node', comfortLevel: 'yellow', encountered: true}, 
    {id: 012345, skill: 'Express.js', comfortLevel: 'yellow', encountered: true}
];

module.exports = {
    getAll,
    getOne
};

function getAll() {
    return skills;
};

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
}
