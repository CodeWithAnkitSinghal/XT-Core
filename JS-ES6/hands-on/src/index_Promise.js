'use strict'


//normal callback
// const getUser = (res, rej) => {
//     rej({
//         name: 'foo'
//     })
// };

// getUser((response) => { console.log(response)})

//promise
const getUser = () => {
    let mockUser = {
        name : 'admin',
        password: 'admin'
    }
    return Promise((resolve, reject) => {
        if(mockUser){
            resolve(mockUser);
        } else {
            reject({
                err: 'Something went wrong'
            });
        }
    });
};

const login = (user, resolve, reject) => {

    return Promise((resolve, reject) => {
        if(user.name === 'sapient' && user.password === 'sapient'){
            resolve(user);
        } else {
            reject({
                err: 'login Failure'
            });
        }
    });
}

const promise = getUser();
promise.then((response) => {
    console.log(response);
})
.then((response) => {
    console.log(response)
})
.catch(err => {
    console.log(err);
})


