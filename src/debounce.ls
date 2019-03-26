(->
  debounce = (f,o={}) ->
    [f,o] = if typeof(f) == \object => [f.func, f] else [f, {delay: if typeof(o) == \object => o.delay or 750 else o}]
    l = {}
    ret = (...args) -> new Promise (res, rej) ~>
      if l.h => ret.clear!
      l <<< {res, rej}
      l.h = setTimeout (~>
        ret = f.apply @, args
        if ret and typeof(ret.then) == \function => ret.then(->res!) else res ret
        l <<< {res: null, rej: null, h: 0}
      ), (o.delay or 750)
    ret.clear = ->
      clearTimeout l.h
      if l.res => l.res null
      l <<< h: 0, res: null, rej: null
    ret

  if module? => module.exports = debounce
  if window? => window.debounce = debounce
)!
