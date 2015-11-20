# DataStore
Cross web component data store and onChange subscriptions. This lightweight solution allows cross component access to
data mutations events, as well as added support for cached data models when the user is offline.

```sh
# downloading all dependencies
npm install
# running task running and starting the server on defaulted port 3002
npm start
```

Then check out : http://localhost:3002/

TODO: More detailed information to follow

## Methods

### setStore (String [name], Object [data], Object [Options])
Allows the user to set a data object to the DataStore by specified key, with added options for subscription management.
Once the data object is registered and cached, it will then fire the collection of subscribed callbacks.

Options:
persist - boolean | Toggle to allow LocalStorage caching when setting data.
message - String | Will broadcast this message to all subscriber callbacks for specific consumer handling.

```
var obj = {
    name: 'Chris',
    color: 'Blue'
};

Store.setStore(
    'myObject',
    obj,
    {
        persist: true,
        message: 'updating'
    }
);

```

### getStore (String [name])
Getting the current data object out of the DataStore. In cases where the data is set to persist, this will get the
cached data model on first hit form the local cache. No setting necessary.
```
var obj = {
    name: 'Chris',
    color: 'Blue'
};

var myData = Store.getStore('myObject');
// {
//       name: 'Chris',
//       color: 'Blue'
// }

```

### subscribe (String [name], Function [callback])
Attaches a handler to fire callbacks when the data is updated in the DataStore. The data and message objects will be
passed through to the callback.

```
var myCallbackFn = function(data, msg) {
    console.log(data, msg);
}

Store.subscribe('myObject', myCallbackFn);

// When setStore is executed, the following will be outputted from the callback function:
// {
//       name: 'Chris',
//       color: 'Blue'
// }, updated

```