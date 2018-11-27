'use strict'

const getUser = () => {
    let mockUser = {
        name : 'sapient',
        password: 'sapient'
    }
    return new Promise((resolve, reject) => {
        if(mockUser){
            resolve(mockUser);
        } else {
            reject({
                err: 'Something went wrong'
            });
        }
    });
};

const login = (user) => {
    return new Promise((resolve, reject) => {
        if(user.name === 'sapient' && user.password === 'sapient'){
            resolve(user);
        } else {
            reject({
                err: 'login Failure'
            });
        }
    });
}

const dashboard = (user) => {
    return new Promise((resolve, reject) => {
        if(user.name === user.password){
            resolve(user)
        } else {
            reject({
                err: 'dashBoard Failure'
            });
        }
    });
}

const promise = getUser();
promise.then((response) => {
    return login(response);
})
.then((response) => {
    return dashboard(response);
})
.then((response) => {
    console.log(response);
})
.catch(err => {
    console.log(err);
})
.finally(() => {
    console.log('finally');
})


