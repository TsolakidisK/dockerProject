const connectToDatabase = () => {
  const dummyPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  }, console.log("Rejected, its an error!"));

  return dummyPromise;
};

export default connectToDatabase;
