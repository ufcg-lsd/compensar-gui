import { useState } from "react";
import { useAuthenticate, useSignup } from "@hooks/useAuth";
import { useQueryClient } from "react-query";
import { signIn } from "next-auth/react";

const AuthComponent: React.FC = () => {
  const [token, setToken] = useState("");
  const [signupData, setSignupData] = useState({
    nome: "",
    idade: 0,
    nomeInstituicao: "",
    cargo: "",
    cidade: "",
  });

  const authenticate = useAuthenticate();
  const signup = useSignup();
  const queryClient = useQueryClient();

  const handleAuthenticate = () => {
    authenticate.mutate(undefined, {
      onSuccess: (data) => {
        console.log(data.message);
      },
      onError: (error) => {
        console.error(error.message);
      },
    });
  };

  const handleSignup = () => {
    signup.mutate(
      { token, data: signupData },
      {
        onSuccess: (data) => {
          console.log(data.message);
        },
        onError: (error) => {
          console.error(error.message);
        },
        onSettled: () => {
          queryClient.invalidateQueries("auth");
        },
      }
    );
  };

  // const { data: session } = useSession();

  // if (session) {
  //   return (
  //     <div>
  //       <p>Bem-vindo, {session.user?.name}</p>
  //       <button onClick={() => signOut()}>Sair</button>
  //     </div>
  //   );
  // }

  return (
    <div>
      <h1>Autenticaçãoo</h1>
      <button onClick={() => signIn('google', { callbackUrl: "/questions" })}>
        Autenticar
      </button>

      <h2>Cadastro</h2>
      <input
        type="text"
        placeholder="Token"
        value={token}
        onChange={(e) => setToken(e.target.value)}
      />
      {/* Inputs para os dados de cadastro */}
      <button onClick={handleSignup}>Cadastrar</button>
    </div>
  );
};

export default AuthComponent;
