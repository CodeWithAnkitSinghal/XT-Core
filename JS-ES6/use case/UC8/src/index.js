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

  async _saveAsync(profile) {
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

  async _findAllAsync() {
    try {
      return this._handleFetchResponse(await fetch(this.url));
    } catch (error) {
      throw new Error("findAll():" + error);
    }
  }

  async _findByIdAsync(id) {
    try {
      return this._handleFetchResponse(await fetch(this.url + "/" + id));
    } catch (error) {
      throw new Error("findById():" + error);
    }
  }

  async _updateAsync(profile) {
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

  async _removeAsync(id) {
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

class ProfileComponent {
  constructor(__service) {
    this.serviceApi = __service;
  }


  createNewProfile(name, city) {
    const modelObj = new ProfileModel(name, city);
    this.serviceApi
      ._saveAsync(modelObj)
      .then(res => {
        console.log("The new Profile Created with id:" + res.id);
      })
      .catch(err => console.log(err));
  }


  getProfiles(id) {
    if (id)
      this.serviceApi
        ._findByIdAsync(id)
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err));
    else
      this.serviceApi
        ._findAllAsync()
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err));
  }

  update(id, city, name) {
    if (!id) {
      console.log("Error: UI:Profile Identifier Not Supplied");
      return;
    }
    let newObj = { id: id };
    if (city) newObj.city = city;
    if (name) newObj.name = name;

    this.serviceApi
      ._updateAsync(newObj)
      .then(res => {
        console.log("The Profile Uopdated for id:" + res.id);
      })
      .catch(err => console.log(err));
  }

  deleteById(id) {
    if (!id) {
      console.log("Error: UI:Profile Identifier Not Supplied");
      return;
    }
    this.serviceApi
      ._removeAsync(id)
      .then(res => {
        console.log("Removed");
      })
      .catch(err => console.log(err));
  }
}

const componentObj = new ProfileComponent(new ProfileService());