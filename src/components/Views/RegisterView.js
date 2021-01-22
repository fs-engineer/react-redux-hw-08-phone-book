import Section from '../Layout/Section';

export default function RegisterView() {
  return (
    <Section title="RegisterView">
      <form>
        <label htmlFor="userName">Имя</label>
        <input type="Name" name="Name" id="userName" />
        <label htmlFor="userEmail">Email</label>
        <input type="email" name="email" id="userEmail" />
        <label htmlFor="userPassword">Пароль</label>
        <input type="text" name="password" id="userPassword" />
        <button>Регистрация</button>
      </form>
    </Section>
  );
}
