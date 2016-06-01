/*
 DataStore | Chris West inkorange.com
 Cross component data management container with tie ins to Local Storage persistence
 */

module.exports = {
    _initStore: function (name) {
        if(!window.store) { // creating object if it doesn't exist
            window.store = {};
        }
        if(!window.store[name]) {
            window.store[name] = {};
            window.store[name].data = "";
            window.store[name].message = "";
            window.store[name].subscriptions = [];
        }
    },

    setStore: function(name, data, dataOptions) {
        //console.trace('I set the store: ', name, data);
        var options = {
            persist: false,     // option to use localStorage to persist data when offline
            callback: null,     // callback to fire when the data object has been updated.
            propogate: true     // if set to true, it will execute the subscriber chain callbacks.
        };
        Object.assign(options, dataOptions);

        // initializes if not already done
        this._initStore(name);
        //console.log('SAVING STORE ' + name + ': ', data);
        // sets the data to the store object
        window.store[name].data = data;

        // when a message is set, it would set it to the store data object
        window.store[name].message = options.message ? options.message : '';

        // if the setter contains a persist config, it will add it to local storage
        if(options.persist) {
            localStorage.setItem(name, JSON.stringify(window.store[name].data));
        }

        var subscriptions = window.store[name].subscriptions ? window.store[name].subscriptions : [];
        if(options.propogate && subscriptions.length > 0) {
            subscriptions.forEach(function (fn) {
                fn(data, window.store[name].message); // executing each callback that is subscribed
            });
        }
        if(options.callback && typeof options.callback === "function") {
            options.callback.call();
        }
    },

    updateStore: function(name, obj, dataOptions) {
        this._initStore(name);
        var existingObj = window.store[name].data === "" ? {} : window.store[name].data;
        this.setStore(name, Object.assign(existingObj, obj), dataOptions);
        return window.store[name].data;
    },

    getStore: function(name) {
        var data = {};

        // initializes if not already done
        this._initStore(name);

        if(!window.store[name].data) {
            var obj = localStorage.getItem(name);
            var CachedData = JSON.parse(obj);
            window.store[name].data = CachedData ? CachedData : '';
            data = window.store[name].data;
        } else {
            data = window.store[name].data;
        }
        return data;
    },

    subscribe: function(nameArray, callbackFn) {
        if(typeof nameArray === 'string') {
            nameArray = nameArray.split(" ");
        }
        if(nameArray) {
            nameArray.map(function (name, key) {
                this._initStore(name);
                window.store[name].subscriptions.push(callbackFn); // subscribing to this store.
            }, this)
        }
    },
    /*
     allows for the removal of subscribers to a Store object
     */
    unSubscribe: function(nameArray, callbackFn) {
        if(typeof nameArray === 'string') {
            nameArray = nameArray.split(" ");
        }
        if(nameArray) {
            nameArray.map(function (name) {
                if(window.store[name]) {
                    window.store[name].subscriptions.map((caller, key) => {
                        if (caller === callbackFn) {
                            window.store[name].subscriptions.splice(key, 1);
                        }
                    });
                }
            }, this)
        }
    },

    getSubscribers: function(name) {
        return window.store[name].subscriptions;
    }

};