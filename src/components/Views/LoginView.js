import Section from '../Layout/Section';

export default function LoginViews() {
  return (
    <Section title="LoginView">
      <form>
        <label htmlFor="userEmail">Email</label>
        <input type="email" name="email" id="userEmail" />
        <label htmlFor="userPassword">Пароль</label>
        <input type="text" name="password" id="userPassword" />
      </form>
    </Section>
  );
}
