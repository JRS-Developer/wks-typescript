import { Request, Response, Router, NextFunction } from "express";
import { User } from '../models/User'

const router = Router()

router.get('/', async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await User.findAll<User>()

    res.send(users)
  } catch (e) {
    next(e)
  }
});

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user: User = req.body

    const newUser = await User.create(user)

    res.send(newUser)
  } catch (e) {
    next(e)
  }
});

export default router
