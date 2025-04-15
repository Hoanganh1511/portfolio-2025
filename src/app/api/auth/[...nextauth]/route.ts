import NextAuth from "next-auth/next";
import { type NextAuthOptions } from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

const options: NextAuthOptions = {
  providers: [
    SpotifyProvider({
      //       authorization:
      //         "https://accounts.spotify.com/authorize?scope=user-read-email,playlist-read-private,playlist-modify-private,playlist-modify-public",
      clientId:
        process.env.SPOTIFY_CLIENT_ID || "6fad8134a79f4b318025dc91992de241",
      clientSecret:
        process.env.SPOTIFY_CLIENT_SECRET || "99aa710514d4402aa18e328cd29066ce",
      authorization:
        "https://accounts.spotify.com/authorize?scope=playlist-read-private",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
        token.expiresAt = 60 * 1000;
      }
      if (account) {
        token.access_token = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        ...token,
      };
    },
  },
};

const handler = NextAuth(options);

export { handler as GET, handler as POST };
