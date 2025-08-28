import { type FC, type FormEvent } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import axios from "axios";

const Signup: FC = () => {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = e.target as HTMLFormElement;
      const data = Object.fromEntries(new FormData(form).entries()); // https://medium.com/@hayavuk/react-forms-d49ec73cc84a
      return axios({
        method: "post",
        url: "/api/signup",
        data: data,
      });
    },
    onSuccess: () => {
      navigate("/login");
    },
    onError: (err: any) => {
      alert(err?.response?.data ?? err?.message ?? "Unknown Error");
    },
  });

  return (
    <>
      <h1>Credential Signup</h1>
      <form onSubmit={(e) => mutation.mutate(e)}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          minLength={1}
          required
        />
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
        <input
          type="password"
          name="passwordConfirm"
          placeholder="Password Confirmation"
          minLength={1}
          required
        />
        <button type="submit">Signup</button>
      </form>
    </>
  );
};

export default Signup;
