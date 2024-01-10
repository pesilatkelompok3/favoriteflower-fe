import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';

const authOptions: NextAuthOptions = {
 session: {
  strategy: 'jwt',
  maxAge: 7 * 24 * 60 * 60,
 },
 secret: process.env.NEXTAUTH_SECRET,
 providers: [
  CredentialsProvider({
   credentials: {
    username: { label: 'Username', type: 'text' },
    password: { label: 'Password', type: 'password' },
   },
   async authorize(credentials) {
    await console.log(credentials);
    const { username, password, token } = credentials as { username: string; password: string; token: string };
    const user1 = {
     id: 1,
     username: 'superAdmin',
     password: 'superman',
     role: 'admin',
    };
    const user: any = {
     id: 2,
     username: 'adminbaru',
     password: 'superman',
     role: 'admin',
    };
    if (token && (username === user.username || username === user1.username)) {
     let role = 'user';
     if (username === 'adminbaru' || username === 'superAdmin') {
      role = 'admin';
     }
     const passwordMatch = password === user.password;
     if (passwordMatch) {
      const dataUser = { ...user, role, accessToken: token };
      return dataUser;
     } else {
      return null;
     }
    } else {
     return null;
    }
   },
  }),
 ],
 callbacks: {
  async jwt({ token, account, user, profile }: any) {
   if (account?.provider === 'credentials') {
    token.id = user.id;
    token.username = user.username;
    token.role = user.role;
    token.accessToken = user.accessToken;
   }
   return token;
  },
  async session({ session, token }: any) {
   if ('id' in token) {
    session.user.id = token.id;
   }
   if ('username' in token) {
    session.user.username = token.username;
   }
   if ('role' in token) {
    session.user.role = token.role;
   }
   if ('accessToken' in token) {
    session.user.accessToken = token.accessToken;
   }
   return session;
  },
 },
 pages: {
  signIn: '/login',
 },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
