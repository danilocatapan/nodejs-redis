import * as faker from 'faker';
import Mail from '../lib/Mail';

export default {
  async store(req, res) {
    const { name, email } = req.body;

    const user = {
      name,
      email,
      password: faker.internet.password(15, false)
    };

    await Mail.sendMail({
      from: 'Red-Potion <contact@red-potion.com>',
      to: `${name} <${email}>`,
      subject: 'User register',
      html: `Hello ${name}, welcome to Red-Potion.`
    })
    
    return res.json(user);
  }
}