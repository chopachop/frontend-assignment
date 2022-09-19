// Style
import { FunctionComponent, useState } from 'react';
import './index.scss';

const Task5: FunctionComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    // If you want to do something with form submit

    alert(`Email: ${email} \nPassword: ${password}`);
  };

  return (
    <div id="task-5">
      <form
        onSubmit={onSubmit}
        className="form"
      >
        <h1 className="form__title">Log in</h1>

        <div className="form__body">
          <div className="form__string">
            <input
              name="email"
              onChange={(event) => setEmail(event.currentTarget.value)}
              value={email}
              className="form__input"
              type="text"
              placeholder=" "
            />
            <label className="form__label">Email</label>
          </div>

          <div className="form__string">
            <input
              name="password"
              onChange={(event) => setPassword(event.currentTarget.value)}
              value={password}
              className="form__input"
              type="password"
              placeholder=" "
            />
            <label className="form__label">Password</label>
          </div>

          <button className="btn-login">Login</button>
        </div>

      </form>
    </div>
  );
};

export default Task5;
