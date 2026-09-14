// to build and read file paths...

import path from "node:path";

// BAD PRACTICE:
const filePath = 'root of the project' + "/uploads" + "filename"

// path.join:
// correct seperater for correct OS.

// for mac: /users/username/project/file.txt
// for window: c:\users\windows\project\file.text

// process.cwd() => the folder where nodejs process started...

const projectRoot = process.cwd();

// create a filepath for /uploads/users/42/profile-pic.png

const userId = "42", origninalName = 'profile-pic.png';

// it just retursn file path, it wont create folder or it wont search for the files, if it presents..
const uploadFilePath = path.join(projectRoot, 'uploads', 'users', userId, origninalName)


// final part of path
const filename =  path.basename(uploadFilePath)

// gives the extension of the path...
const fileExtension =  path.extname(uploadFilePath)

// parent folder or directory
const parentFolder = path.dirname(uploadFilePath)


console.log('base file name', filename)
console.log('base file extension', fileExtension)
console.log('parent folder', parentFolder)