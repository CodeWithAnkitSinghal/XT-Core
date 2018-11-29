'use strict'

const getUser = () => {
    let mockUser = {
        name : 'sapient',
        password: 'sapient'
    }
    return new Promise((resolve, reject) => {
        if(mockUser){
            setTimeout(() => {
                console.log('user found successfull');
                resolve(mockUser)
            }, 1000);;
        } else {
            setTimeout(() => {
                console.log('user found unsuccessfull');
                reject({
                    err: 'Something went wrong'
                });
            }, 1000);
        }
    });
};

const login = (user) => {
    return new Promise((resolve, reject) => {
        console.log('login success');
        if(user.name === 'sapient' && user.password === 'sapient'){
            setTimeout(() => {
                resolve(user);
            }, 1000);
        } else {
            setTimeout(() => {
                console.log('login failure');
                reject({
                    err: 'login Failure'
                });
            }, 1000);
        }
    });
}

const dashboard = (user) => {
    return new Promise((resolve, reject) => {
        if(user.name === user.password){
            setTimeout(() => {
                console.log('dashboard success')
                resolve(user)
            }, 1000);
        } else {
            setTimeout(() => {
                console.log('dashbpard failure')
                reject({
                    err: 'dashBoard Failure'
                });
            }, 1000);
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


