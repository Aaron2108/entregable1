export const getRandom = (dbQuotes) => {
    const randomIndex = Math.floor(Math.random() * dbQuotes.length);
    return dbQuotes[randomIndex];
  }