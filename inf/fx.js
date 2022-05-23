
export const curry = f => (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._);

export const go = (...args) => {
  return reduce((a, f) => f(a), args);
};

export const pipe = (f, ...fs) => (...els) => go(f(...els), ...fs);

const isIterable = (a) => a && a[Symbol.iterator];


export const L = {};

L.range = function* (l) {
  let i = -1;
  while(++i < l) {
    yield i;
  }
};
L.map = curry(function* (f, iter) {
  for (const a of iter) yield f(a);
});

L.filter = curry(function* (f, iter) {
  for (const a of iter) if(f(a)) yield a;
});

L.entiries = function* (obj) {
  for (const k in obj) yield [k, obj[k]];
};

L.flatten = function* (iter) {
  for (const a of iter) {
    if (isIterable(a)) {
      for (b of a) yield b;
    }
    else yield a;
  }
};

L.deepFlatten = function* deepFalt(iter) {
  for (const a of iter) {
    if (isIterable(a)) yield *deepFalt(a);
    else yield a;
  }
};

L.flatMap = curry(pipe(
  L.map,
  L.flatten,
))


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

export const take = curry((limit, iterable) => {
  let res = [];
  for (const a of iterable) {
    res.push(a);
    if (res.length === limit) return res;
  }
  return res;
})

export const takeAll = take(Infinity);

export const range = l => {
  let i = -1;
  let res = [];
  while(++i < l) {
    res.push(i);
  }
  return res;
}

export const join = curry((sep = ',', iter) => reduce((a, b) => `${a}${sep}${b}`, iter));

export const find = curry((f, iter) => go(
  iter,
  L.filter(f),
  take(1),
  ([a]) => a
))

// export const map = curry((f, iter) => {
//   const result = [];
//   for (const el of iter) {
//     result.push(f(el))
//   }
//   return result;
// })

export const map = curry(pipe(
  L.map,
  takeAll,
));


// export const filter = curry((f, iter) => {
//   const result = [];
//   for (const el of iter) {
//     if (f(el)) result.push(el);
//   }
//   return result;
// })

export const filter = curry(pipe(
  L.filter,
  takeAll,
));

export const flatten = pipe(L.flatten, takeAll);

export const flatMap = curry(pipe(L.map, flatten));