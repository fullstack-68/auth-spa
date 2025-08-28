import { type FC, type FormEvent } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router";
const Login: FC = () => {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = e.target as HTMLFormElement;
      const data = Object.fromEntries(new FormData(form).entries()); // https://medium.com/@hayavuk/react-forms-d49ec73cc84a
      return axios({
        method: "post",
        url: "/api/login",
        data: data,
      });
    },
    onSuccess: () => {
      navigate("/");
    },
    onError: (err: any) => {
      alert(err?.response?.data ?? err?.message ?? "Unknown Error");
    },
  });

  return (
    <>
      <h1>Credential Login</h1>
      <article>
        <form onSubmit={(e) => mutation.mutate(e)}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            pattern=".+@.+"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            minLength={1}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </article>
      <h1>Social Login</h1>
      <article>
        <div style={{ display: "flex", gap: "2rem" }}></div>
        <a href="/api/login/oauth/github">
          <svg width="90" height="90">
            <image
              xlinkHref="logos/github-mark-white.svg"
              width="90"
              height="90"
            />
          </svg>
        </a>
      </article>
    </>
  );
};
export default Login;
