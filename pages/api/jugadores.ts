import type { NextApiRequest, NextApiResponse } from "next";

import { db } from "../../database";

import { User } from "../../models";

type Data = { message: string } | any | any[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return getUsers(req, res);

    case "PUT":
      return switchUser(req, res);
  }
}

const getUsers = async (req: NextApiRequest, res: NextApiResponse) => {
  await db.connect();
  const users = await User.find().lean();

  await db.disconnect();
  res.status(200).json(users);
};

const switchUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const { _id, isActive } = req.body;
  console.log(req.body);

  try {
    await db.connect();
    const users = await User.findByIdAndUpdate(_id, {
      activo: isActive,
    });

    await db.disconnect();
    res.status(200).json(users);
  } catch (error) {}
};
