console.log("Start Script");

// Pyramid of doom/Callback Hell/ Inversion of control

function walkin(cb) {
  console.log("Walking in");
  setTimeout(cb, 2000);
}

function chechMenu(cb) {
  console.log("Checking Menu");
  setTimeout(cb, 3000);
}

function order(cb) {
  console.log("Ordering");
  setTimeout(cb, 4000);
}

function HavingLunch(cb) {
  console.log("Having Lunch");
  setTimeout(cb, 5000);
}

function bill(cb) {
  console.log("paying bill");
  setTimeout(cb, 2000);
}

function leave(cb) {
  console.log("Walking out");
}

walkin(() => {
  chechMenu(() => {
    order(() => {
      HavingLunch(() => {
        bill(() => {
          leave();
        });
      });
    });
  });
});

