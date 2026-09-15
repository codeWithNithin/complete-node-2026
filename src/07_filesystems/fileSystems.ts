// fs system or file systems

import path from "node:path";
import fs from 'node:fs'
import fsPromises from 'node:fs/promises'

// to work with files and folders

//  to have crud operations with files...

// create folders, read and write files, read file info, and delete files

// 3 ways to work with file systesms:
// 1. sync file systems: readFileSync
// 2. callback apis : readFile
// 3.  promise apis:


// 1. SYNC APIS

// WHERE TO USE THE sync apis:
// small startup scripts
// build scripts
// local scripts

// WHERE NOT TO USE SYNC APIS:
// for http request handlers...
// high traffic apis...
// background jobs...

type FileResult = {
  style: string;
  fileName: string;
  content: string;
  sizeInBytes: number;
};


const DEMO_FOLDER_PATH = path.join(process.cwd(), 'file-system', 'fs-demo')
const SYNC_FILE_PATH =  path.join(DEMO_FOLDER_PATH, 'sync-note.txt')
const CALLBACK_FILE_PATH = path.join(DEMO_FOLDER_PATH, 'callback-note.txt')
const PROMISE_FILE_PATH = path.join(DEMO_FOLDER_PATH, 'promise-note.txt')

// first check if the folder exists, if not create one..
// and after that, do file operations like writesync, appendsync and te

function ensureDemoFolderExists(): void {
    // check if the folder already exists...
  if (!fs.existsSync(DEMO_FOLDER_PATH)) {
    fs.mkdirSync(DEMO_FOLDER_PATH, { recursive: true });
  }
}

function runSyncExample(): FileResult {
  // write content to a file
  fs.writeFileSync(SYNC_FILE_PATH, "created using sync fs", "utf-8");
//  append content along with above file content...
  fs.appendFileSync(SYNC_FILE_PATH, " Appended using sync fs ", "utf-8");
//   read file sync
  const content = fs.readFileSync(SYNC_FILE_PATH, "utf-8");
//  gets stats of file....
  const stats = fs.statSync(SYNC_FILE_PATH);

  return {
    style: "sync",
    content,
    fileName: path.basename(SYNC_FILE_PATH),
    sizeInBytes: stats.size,
  };
}


// callback(error, result)

function runCallbackExample(): Promise<FileResult> {
  return new Promise((resolve, reject) => {
    fs.writeFile(
      CALLBACK_FILE_PATH,
      "created using callback fs",
      "utf-8",
      (writeError) => {
        if (writeError) {
          reject(writeError);
          return;
        }

        fs.appendFile(
          CALLBACK_FILE_PATH,
          " Append using callback fs ",
          "utf-8",
          (appendError) => {
            if (appendError) {
              reject(appendError);
              return;
            }

            fs.readFile(CALLBACK_FILE_PATH, "utf-8", (readError, content) => {
              if (readError) {
                reject(readError);
                return;
              }

              fs.stat(CALLBACK_FILE_PATH, (statError, stats) => {
                if (statError) {
                  reject(statError);
                  return;
                }

                resolve({
                  style: "callback",
                  content,
                  sizeInBytes: stats.size,
                  fileName: path.basename(CALLBACK_FILE_PATH),
                });
              });
            });
          },
        );
      },
    );
  });
}



async function runPromiseExample(): Promise<FileResult> {
  await fsPromises.writeFile(
    PROMISE_FILE_PATH,
    "Created using promise apis",
    "utf-8",
  );

  await fsPromises.appendFile(
    PROMISE_FILE_PATH,
    " appended using promise apis ",
    "utf-8",
  );

  const content = await fsPromises.readFile(PROMISE_FILE_PATH, "utf-8");
  const stats = await fsPromises.stat(PROMISE_FILE_PATH);

  return {
    style: "promises",
    content,
    fileName: path.basename(PROMISE_FILE_PATH),
    sizeInBytes: stats.size,
  };
}

async function main(): Promise<void> {
  try {
    ensureDemoFolderExists();
    const syncResult = runSyncExample();
    const callbackResult = await runCallbackExample();
    const PromiseResult = await runPromiseExample();

    console.log([syncResult, callbackResult, PromiseResult]);
  } catch (error) {
    const message = error instanceof Error ? error.message : "unknown error";
    console.error("file system error", message);
  }
}

main();