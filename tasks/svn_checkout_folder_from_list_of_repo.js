const fs = require('fs-extra');
var svnUltimate = require('node-svn-ultimate');

const books = require('../config/books.js');

class SvnUtils {
    constructor() {
        console.log("S9ML checkout process started.");
        fs.remove(`../habitat_ws`);
    } 
    checkout(book) {
        const path = `https://svn.inkling.com/svn/${book}/trunk/s9ml`;
        svnUltimate.commands.checkout(
            path, 
            `../habitat_ws/${book}`,
            {
                username: "asish.khuntia@hmhco.com",
                password: "Ind@2018"
            },
            function( err ) {
                console.log( book + ": Checkout complete !" );
                
            } 
        );
    }
    
}
const svn = new SvnUtils();
books.forEach((book) => {
       svn.checkout(book);
});
