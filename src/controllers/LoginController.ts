import { NextFunction, Request, Response } from "express";
import { controller } from "./decorators/controller";
import { get } from "./decorators/routes";
import { use } from "./decorators/use";

function logger(req: Request, res: Response, next : NextFunction){
  console.log('Request was made!!!');
  next(); 
}

@controller('/auth')
class LoginController {
  @get('/login')
  @use(logger)
  getLogin(req: Request, res: Response): void {
    res.send(`
  <form method="POST">
  <div>
  <label>Email</label>
  <input name="email" />
  </div>
  <div>
  <label>Password</label>
  <input name="password" type="password"/>
  </div>
  <div>
  <button>Submit</button>
  </div>
  </form>
    `);
  }
}
