import * as faker from 'faker';

export default {
  async store(req, res) {
    const { name, email } = req.body;

    const user = {
      name,
      email,
      password: faker.internet.password(15, false)
    };
    
    return res.json(user);
  }
}