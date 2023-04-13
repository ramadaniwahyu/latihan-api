module.exports = {
  jwtSecret: process.env.JWT_SECRET || 'e67124ac-e043-43ac-a3dd-0f6f2652ebca',
  jwt: {
    expiresIn: "365d",
  }
};