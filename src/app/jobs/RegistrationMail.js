import Mail from '../lib/Mail';

export default {
  key: 'RegistrationMail',
  options: {
    delay: 5000,
    priority: 3
  },
  async handle({ data }) {
    const { user } = data;

    await Mail.sendMail({
      from: 'Red-Potion <contact@red-potion.com>',
      to: `${user.name} <${user.email}>`,
      subject: 'User register',
      html: `Hello ${user.name}, welcome to Red-Potion.`
    });
  }
}

