function skillsMember() {
    var member = {
        name: 'John',
        age: 30,
        skills: ['JS', 'CSS', 'HTML'],
        salary: 1000,
        bonus: 200,
        getSalary: function () {
            return this.salary + this.bonus;
        },
        setSalary: function (newSalary) {
            this.salary = newSalary;
        },
        getSkills: function () {
            return this.skills;
        },
        addSkill: function (newSkill) {
            this.skills.push(newSkill);
        }
    };
    return member;
}