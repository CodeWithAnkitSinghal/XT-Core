const getUser = (resolve, reject) => {
    let mockUser = {
        name:'sapient',
        password:'sapient'
    };

    //bussiness logic
    if(mockUser){
        resolve(mockUser);
    } else {
        reject({
            err: 'Something Went Wrong'
        })
    }
}
  
  const login = (user, resolve, reject) => {
      if(user.name === 'sapient' && user.password === 'sapient'){
          resolve(user);
      } else {
          reject({
              err:'Login failure'
          })
      }
  }
  
  const SuccessHandler = (user) => {
      login(user, dashBoardSuccess, dashboardFailure )
  }

  const loginSuccess = user => {
      if (user.name === user.password) {
          resolve(user);
      } else {
          reject({
              err: 'redirect to the getUser'
          })
      }
  }

  const dashBoardSuccess = user => {
      console.log(`Welcome ${user.name}`);
  } 

  const dashboardFailure = err => {
      console.log(err);
  }

  const loginFaliure = err => {
      console.log(err);
  }
  
  const FailureHandler = err => {
    console.log(err)
  }

  getUser(SuccessHandler, FailureHandler);