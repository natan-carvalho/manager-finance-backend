import type * as express from 'express'
import { type User } from "src/generated/prisma/client";

declare global {
  namespace Express {
    export interface Request {
      user?: User
    }
  }
}