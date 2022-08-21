var StateManager=function(){var i=(e.prototype._fire=function(e){this._callback(e)},e.prototype.trigger=function(e,t){var i,r,s;if(null===this._fields)this._fire(t);else if(Array.isArray(this._fields))for(s=Object.keys(e),r=0;r<s.length;r++)if(i=s[r],this._fields.includes(i)){this._fire(t);break}},e);function e(e,t){if("function"!=typeof e)throw new TypeError('Unexpected "callback" argument of type "'+typeof e+'"; expected function.');if(this._callback=e,null==t)this._fields=null;else if("string"==typeof t)this._fields=[t];else{if(!Array.isArray(t))throw new TypeError('Unexpected "fields" argument of type "'+typeof t+'"; expected undefined, null, string, or array of strings.');for(fieldIndex=0;fieldIndex<t.length;fieldIndex++)if(field=t[fieldIndex],"string"!=typeof field)throw new TypeError('Unexpected member of "fields" argument at index '+fieldIndex+' of type "'+typeof field+'"; expected string.');this._fields=t}}function t(e){this._state=Object.assign({},e||{}),this._stateListeners=[]}return t.prototype.addStateListener=function(e,t){return t=new i(e,t),this._stateListeners.push(t),t},t.prototype.getState=function(e){var t,i,r;if(void 0===e)return i={},Object.assign(i,this._state);if("string"==typeof e)(i={})[e]=this._state[e];else{if(!Array.isArray(e))throw new TypeError('Unexpected "fields" argument of type "'+typeof e+'"; expected undefined, string, or array of strings.');for(i={},t=0;t<e.length;t++)i[r=e[t]]=this._state[r]}return i},t.prototype.removeStateListener=function(e){for(var t=0;t<this._stateListeners.length;t++)if(this._stateListeners[t]===e){this._stateListeners.splice(t,1);break}},t.prototype.setState=function(e){var t,i,r,s,n;if(e){if(t={},"object"!=typeof(n="function"==typeof e?e(this._state):e))throw new TypeError('Unexpected argument of type "'+typeof e+'" passed to setState; expected function or object.');for(s=Object.keys(n),r=0;r<s.length;r++)i=s[r],this._state[i]!==e[i]&&(t[i]=e[i]);Object.assign(this._state,t),this._triggerStateListeners(t)}},t.prototype._triggerStateListeners=function(e){var t;if(0<Object.keys(e).length)for(t=0;t<this._stateListeners.length;t++)this._stateListeners[t].trigger(e,this._state)},t}();