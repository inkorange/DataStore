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
            window.store[name].data = null;
            window.store[name].message = null;
            window.store[name].subscriptions = [];
        }
    },

    setStore: function(name, data, dataOptions) {
        //console.trace('I set the store: ', name, data);
        var options = {
            persist: false,
            callback: null
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
        if(subscriptions.length > 0) {
            subscriptions.forEach(function (fn) {
                fn(data, window.store[name].message); // executing each callback that is subscribed
            });
        }

        if(options.callback && typeof options.callback === "function") {
            options.callback.call();
        }
    },

    updateStore: function(name, obj, dataOptions) {
        if(window.store[name]) {
            this.setStore(name, Object.assign(window.store[name].data, obj), dataOptions);
        }
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

    getSubscribers: function(name) {
        return window.store[name].subscriptions;
    }

};