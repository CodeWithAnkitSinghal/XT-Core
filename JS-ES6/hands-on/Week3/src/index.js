"use strict";

class ProfileModel {
  constructor(name = "<Enter Name>", city = "<Enter City>") {
    this.name = name;
    this.city = city;
  }
}

class ProfileService {

  constructor() {
    this.url = "http://localhost:3000/profile";
  }

  async _handleFetchResponse(res) {
    if (res.status === 200 || res.status === 201) {
      let result = await res.json();
      return result;
    } else {
      throw "ServiceAPI Call failed. Status Code:" +
        res.status +
        "  " +
        res.statusText;
    }
  }


  async saveAsync(profile) {
    try {
      let res = await fetch(this.url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(profile) // body data type must match "Content-Type" header
      });
      return this._handleFetchResponse(res);
    } catch (e) {
      throw new Error("save():" + e);
    }
  }

  async findAllAsync() {
    try {
      return this._handleFetchResponse(await fetch(this.url));
    } catch (error) {
      throw new Error("findAll():" + error);
    }
  }


  async findByIdAsync(id) {
    try {
      return this._handleFetchResponse(await fetch(this.url + "/" + id));
    } catch (error) {
      throw new Error("findById():" + error);
    }
  }


  async updateAsync(profile) {
    try {
      let res = await fetch(this.url + "/" + profile.id, {
        method: "PUT", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(profile) // body data type must match "Content-Type" header
      });

      return this._handleFetchResponse(res);
    } catch (e) {
      throw new Error("update():" + e);
    }
  }


  async removeAsync(id) {
    try {
      let res = await fetch(this.url + "/" + id, {
        method: "DELETE", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      });
      return this._handleFetchResponse(res);
    } catch (e) {
      throw new Error("remove():" + e);
    }
  }
}

const _service = new ProfileService();

function fetchData() {
  
  var domUL = document.getElementById('Profile');

_service.findAllAsync()
.then(item => {
  for (let index = 0; index < item.length; index++) {
    var UL_LI = document.createElement('li');
    UL_LI.className = 'list-group-item';
    if (index === 0) {
      UL_LI.classList.add('active');
    }
    UL_LI.innerHTML = item[index].name;
    domUL.appendChild(UL_LI);
  }
});

}

