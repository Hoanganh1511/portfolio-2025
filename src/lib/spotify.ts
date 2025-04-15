export const getAccessToken = async (): Promise<string> => {
  const authorization = Buffer.from(
    `${process.env.SPOTIFY_CLIENT_ID ?? ""}:${
      process.env.SPOTIFY_CLIENT_SECRET ?? ""
    }`
  ).toString("base64");
  const grant = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${authorization}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  const { access_token } = (await grant.json()) as { access_token: string };

  return access_token;
};
