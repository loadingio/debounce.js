// Generated by LiveScript 1.3.1
var slice$ = [].slice;
(function(){
  var debounce;
  debounce = function(f, o){
    var ref$, l, ret;
    if (typeof f === 'number' && !(o != null)) {
      return new Promise(function(res, rej){
        return setTimeout(function(){
          return res();
        }, f);
      });
    }
    if (typeof o === 'function') {
      ref$ = [o, f], f = ref$[0], o = ref$[1];
    }
    if (!o) {
      o = {};
    }
    ref$ = typeof f === 'object'
      ? [f.func, f]
      : [
        f, {
          delay: typeof o === 'object' ? o.delay || 750 : o
        }
      ], f = ref$[0], o = ref$[1];
    l = {};
    ret = function(){
      var args, used, p, this$ = this;
      args = slice$.call(arguments);
      used = false;
      p = new Promise(function(res, rej){
        if (used) {
          return;
        }
        if (l.h) {
          ret.clear();
        }
        l.res = res;
        l.rej = rej;
        return l.h = setTimeout(function(){
          var ret;
          ret = f.apply(this$, args);
          if (ret && typeof ret.then === 'function') {
            ret.then(function(){
              var args;
              args = slice$.call(arguments);
              return res.apply(null, args);
            });
          } else {
            res(ret);
          }
          return l.res = null, l.rej = null, l.h = 0, l;
        }, o.delay || 750);
      });
      p.now = function(){
        used = true;
        ret.clear();
        return f.apply(this$, args);
      };
      p.cancel = function(){
        return ret.clear();
      };
      return p;
    };
    ret.clear = function(){
      clearTimeout(l.h);
      if (l.res) {
        l.res(null);
      }
      return l.h = 0, l.res = null, l.rej = null, l;
    };
    return ret;
  };
  if (typeof module != 'undefined' && module !== null) {
    module.exports = debounce;
  }
  if (typeof window != 'undefined' && window !== null) {
    return window.debounce = debounce;
  }
})();
