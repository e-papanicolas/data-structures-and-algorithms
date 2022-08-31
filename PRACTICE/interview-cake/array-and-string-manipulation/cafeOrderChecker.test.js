// Given all three arrays, write a function to check that my service is first-come, first-served. All food should come out in the same order customers requested it.
// BIG O: time O(n) / space O(1)

const isFirstComeFirstServe = (takeout, dineIn, served) => {
  let takeoutIdx = 0;
  let dineInIdx = 0;
  let takeoutMaxIdx = takeout.length;
  let dineInMaxIdx = dineIn.length;

  for (let i = 0; i < served.length; i++) {
    let currOrder = served[i];

    if (takeoutIdx <= takeoutMaxIdx && currOrder === takeout[takeoutIdx]) {
      takeoutIdx++;
    } else if (dineInIdx <= dineInMaxIdx && currOrder === dineIn[dineInIdx]) {
      dineInIdx++;
    } else return false;
  }

  if (dineInIdx !== dineIn.length || takeoutIdx !== takeout.length)
    return false;

  return true;
};

test("returns true if the orders are served first come, first serve", () => {
  expect(
    isFirstComeFirstServe([17, 8, 24], [12, 19, 2], [17, 8, 12, 19, 24, 2])
  ).toBe(true);
  expect(
    isFirstComeFirstServe([17, 8, 24], [12, 19, 2], [17, 8, 12, 19, 24, 2])
  ).toBe(true);
});
test("returns false if the orders are NOT served first come, first serve", () => {
  expect(isFirstComeFirstServe([1, 3, 5], [2, 4, 6], [1, 2, 4, 6, 5, 3])).toBe(
    false
  );
});

// We walk through servedOrders, seeing if each customer order so far matches a customer order from one of the two registers. To check this, we:

// Keep pointers to the current index in takeOutOrders, dineInOrders, and servedOrders.
// Walk through servedOrders from beginning to end.
// If the current order in servedOrders is the same as the current customer order in takeOutOrders, increment takeOutOrdersIndex and keep going. This can be thought of as "checking off" the current customer order in takeOutOrders and servedOrders, reducing the problem to the remaining customer orders in the arrays.
// Same as above with dineInOrders.
// If the current order isn't the same as the customer order at the front of takeOutOrders or dineInOrders, we know something's gone wrong and we're not serving food first-come, first-served.
// If we make it all the way to the end of servedOrders, we'll check that we've reached the end of takeOutOrders and dineInOrders. If every customer order checks out, that means we're serving food first-come, first-served.
