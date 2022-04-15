import { Request, Response } from "express";
import { createConnection } from "../postgres";

type User = {
  username: string;
  password: string;
  name: string;
  id: string;
};

export class GetUserInfoController {
  async handle(request: Request, response: Response) {
    const { userId } = request.params;

    const clientConnection = await createConnection();

     const { rows } = await clientConnection.query(
       `SELECT * FROM USERS_REDIS WHERE ID  = $1 LIMIT 1`,
       [userId]
     );

    const user: User = rows[0];

    user.password = undefined;

    return response.json(user);
  }
}