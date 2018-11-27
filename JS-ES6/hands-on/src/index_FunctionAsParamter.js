console.log('script connected');

//function args

name = 'subu'
function greeter(greet)
{
    var name = 'Singhal';
    greet();
}

const h1 = function(){
    var name = 'Ankit';
    console.log(this.name);
};

greeter(h1);

const myGreeter = greet => greet('Subramnian');
myGreeter(name => console.log(name)); 


//UC 1
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

  