export const curry = f => (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._);

export const go = (...args) => {
  return reduce((a, f) => f(a), args);
};

export const pipe = (f, ...fs) => (...els) => go(f(...els), ...fs);

export const map = curry((f, iter) => {
  const result = [];
  for (const el of iter) {
    result.push(f(el))
  }
  return result;
})

export const filter = curry((f, iter) => {
  const result = [];
  for (const el of iter) {
    if (f(el)) result.push(el);
  }
  return result;
})

export const reduce = curry((f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
});
