import { runWithAmplifyServerContext } from "@/utils/amplify-utils";
import { Authenticator } from "@aws-amplify/ui-react";
import { GetServerSideProps } from "next";
import { getCurrentUser } from "aws-amplify/auth/server";
import { AuthUser } from "aws-amplify/auth";

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const currentUser = await runWithAmplifyServerContext({
    nextServerContext: { request: req, response: res },
    operation: async (contextSpec) => getCurrentUser(contextSpec),
  });

  return { props: { currentUser } };
};

export default function Home({ currentUser }: { currentUser: AuthUser }) {
  return (
    <>
      <h1>Hello From Pages {currentUser.username ?? ""}</h1>
      <Authenticator>
        {({ signOut }) => <button onClick={signOut}>Sign out</button>}
      </Authenticator>
    </>
  );
}
