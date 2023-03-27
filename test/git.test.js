const WorkingDirectory = require("../models/working-directory");
const GitCommand = require("../models/git-command");

const chai = require('chai');
const expect = chai.expect;


describe("Testing GitCommand.status()", function(){

    it('Should return information if has changes in directory', function(){
        let wd = new WorkingDirectory();
        wd.addFile("index.html", "views", "<html>Hello</html>");
        wd.addFile("index.js", "assets/scripts", "alert('Hi!')");

        let git = new GitCommand(wd);
        let output = git.status();

        expect(output).to.equal('You have 2 change/s.\nviews/index.html\nassets/scripts/index.js');
    });

    it('Should return information if no changes in directory', function(){
        let wd = new WorkingDirectory();
        let git = new GitCommand(wd);
        let output = git.status();

        expect(output).to.equal('You have 0 change/s.\n');
    });


})



describe("Testing GitCommand.init()", function(){

    it('Should return empty Git repository', function(){
        let wd = new WorkingDirectory();
        let git = new GitCommand(wd);
        let output = git.init();

        expect(output).to.equal('Initialized as empty Git repository.');
    });

    
})


describe("Testing GitCommand.push()", function(){

    it('Should return message when empty push or nothing to push', function(){
        let wd = new WorkingDirectory();
        let git = new GitCommand(wd);
        git.init();
        let output = git.push();

        expect(output).to.equal('Nothing to push. No committed file found.');
    });
})



