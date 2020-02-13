function spy (func) {
  function wrapper (...args) {
    wrapper.calls.push(args)
    return func.apply(spy, args)
  }
  wrapper.calls = []

  return wrapper
}

function work (a, b) {
  console.log(a + b)
}

const workSpyed = spy(work)

workSpyed(1, 2)
workSpyed(4, 5)

for (const args of workSpyed.calls) {
  console.log('call:' + args.join()) // "call:1,2", "call:4,5"
}
