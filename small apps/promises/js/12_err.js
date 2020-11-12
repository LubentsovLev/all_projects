function p() {
  return new Promise((resolve, reject) => {
    resolve(123);
    reject(321);
    throw new Error("ERROR inside promise");
  });
}

try {
  p().then(ftw).catch(wtf);
} catch (err) {
  console.error("Try Catch:", err);
}

function ftw(e) {
  console.log("ftw resolve:", e);
}

function wtf(e) {
  if (typeof e == "object") {
    console.error("wtf reject:", e.message);
  } else {
    //Number 321
    console.error("wtf reject:", e);
  }
}