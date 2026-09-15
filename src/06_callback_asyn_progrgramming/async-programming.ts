import { rejects } from "node:assert";

type User = {
    id: number;
    name: string;
    role: "user" | "super-admin";
}


const users : User[] = [
 {
    id: 1,
    name: "nithin",
    role: "super-admin"
 },
  {
    id: 2,
    name: "roman",
    role: "user"
 },
   {
    id: 3,
    name: "john",
    role: "user"
 }
]

// callback: is a function that is passed as a argument of another funciton

// callback(err, data)

function fetchUserDataCallback(userId: number, callback: (err: Error | null, user? : User) => void ):  void {

    setTimeout(() => {
            const user = users.find((ele) => ele.id === userId)

    if(!user) {
        callback(new Error(`user with id ${userId} doesnt exist`))
        return
    }

    callback(null, user)
    }, 500)

}

 function fetchUserDataWithPromise(userId: number): Promise<User | Error> {
  return new Promise((res, rej) => {
   
    let user = users.find(ele => ele.id === userId) 

    if(!user) {
        rej(`user with id ${userId} doesnt exist`)
        return
    }

    res(user)
  })
}

async function findUserWithAsyncAwait(userId: number): Promise<void> {
  try {
    const user = await fetchUserDataWithPromise(userId);
    console.log("async/await", user.name);
  } catch (error) {
    const message = error instanceof Error ? error.message : "unknown error";
    console.log("async/await", message);
  }
}


fetchUserDataCallback(3, (err, user) => {
    if(err) {
        console.log('callback err', err)
        return
    }

    console.log('user details:', user)
})


