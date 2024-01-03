import { Request, Response } from "express";
import {prisma_user,  PrismaClient } from "@prisma/client";

const PrismaUsers = new PrismaClient().prisma_user 

export const getAllUsers = async(req: Request, res: Response) => {
    try {
        const AllPrismaUsers:prisma_user[]   = await PrismaUsers.findMany();
    
        res.status(200).json({ data: AllPrismaUsers });
      } catch (error) {
        console.log(error);
      }
    // res.send("heeee")
}


export const createUsers = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const usersData = req.body;
      console.log("Req_body", usersData)
      const users = await PrismaUsers.create({
        data: { ...usersData },
      });
  
      res.status(201).json({ data: users });
    } catch (error) {
      console.log(error);
    }
  };


  export const deleteUsers = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      console.log("inside delete api");
      const authorId = req.params.id;
      const userData = await PrismaUsers.delete({ where: { id: Number(authorId) } });
      console.log("userData",userData)
      res.status(200).json({ data: {} });
    } catch (error) {
      console.log(error);
    }
  };

  export const updateUsers = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      console.log("inside update")
      const userId = req.params.id;
      const userData = req.body;
      console.log("userDate_to_update", userData)
      const updatedUser = await PrismaUsers.update({
        where: { id: Number(userId) },
        data: { ...userData },
      });
  
      res.status(200).json({ data: updatedUser });
    } catch (error) {
      console.log(error);
    }
  };