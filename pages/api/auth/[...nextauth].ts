import NextAuth, { Account, Profile, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb";
import { dbUsers } from "../../../database";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],

  pages: {
    signIn: "/",
  },

  jwt: {
    // secret: process.env.JWT_SECRET_SEED, // deprecated
  },

  session: {
    maxAge: 3600, /// 30d
    strategy: "jwt",
    updateAge: 2216400, // cada día
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }: any) {
      if (!user?.role) {
        user.role = "Cliente";
      }

      if (!user?.activo) {
        user.activo = false;
      }

      if (!user?.empezadp) {
        user.empezado = false;
      }

      // if (!user?.activo) {
      //   user.activo = "false";
      // }

      // if (!user?.formulario) {
      //   user.formulario = "false";
      // }
      return true;
    },

    async jwt({ token, account, user }) {
      // console.log({ token, account, user });

      if (account) {
        token.accessToken = account.access_token;

        switch (account.type) {
          case "oauth":
            token.user = await dbUsers.oAUthToDbUser(
              user?.email || "",
              user?.name || ""
            );
            break;
        }
      }

      return token;
    },

    async session({ session, user, token }: any) {
      //console.log({ session, token, user });
      session.accessToken = token.accessToken;
      session.user = token.user as any;

      return session;
    },
  },

  adapter: MongoDBAdapter(clientPromise),
  //debug: process.env.NODE_ENV === "development",

  secret: process.env.SECRET,
});
