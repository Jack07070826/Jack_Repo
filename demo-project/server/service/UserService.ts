var request = require("request");

export default class UserService {
  async getAll() {
    return [
      {
        name: "Mary",
        job: "EEA",
      },
      {
        name: "Jack",
        job: "dev",
      },
      {
        name: "John",
        job: "devops",
      },
    ];
  }

  async getByName(name: string) {
    // return new Promise((resolve, reject) => {
    //   request.get(
    //     `http://localhost:8888/getUserByName?name=${name}`,
    //     function (error, response, body) {
    //       if (!error) {
    //         resolve(JSON.parse(body));
    //       } else {
    //         reject(error);
    //       }
    //     }
    //   );
    // });

    const users = [
      {
        name: "Mary",
        job: "EEA",
      },
      {
        name: "Jack",
        job: "dev",
      },
      {
        name: "John",
        job: "devops",
      },
    ];
    const targetUser = users.find((u) => u.name === name);
    return Promise.resolve(targetUser);
  }
}
