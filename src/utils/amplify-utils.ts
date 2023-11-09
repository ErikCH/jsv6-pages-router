import { createServerRunner } from "@aws-amplify/adapter-nextjs";
import config from "../../amplifyconfiguration.json";
import { generateServerClientUsingReqRes } from "@aws-amplify/adapter-nextjs/api";

export type Schema = {
  Todo: {
    readonly id: string;
    readonly createdAt: string;
    readonly updatedAt: string;
    name?: string | undefined;
    description?: string | undefined;
    owner?: string | undefined;
  };
};

export const { runWithAmplifyServerContext } = createServerRunner({
  config,
});

export const middlewareClient = generateServerClientUsingReqRes<Schema>({
  config,
});
