In order to use the `MultipartEncoder` class, you first need to initialize an instance of the library.
To do so, you can very simply say:

```js
const multipartHandler = new MultipartEncoder();
```

Now, the instance exposes two methods:
- `encode( obj )` - takes in an object (`obj`) and returns a string formatted as
`multipart/form-data`.
- `decode( str )` - takes in a string (`str`) and returns an object representing the provided
`multipart/form-data`.

#### Encoding

As a very basic example, let's take the following object:

```javascript
const obj = {
    name: 'Captain Underpants',
    identifier: '172/B'
};
```

We can encode this like so:

```javascript
const data = multipartHandler.encode( obj );
```

The output will be something like the following:

```text
--12143381585252692
Content-Disposition: form-data; name=name
Content-Type: text/plain; charset=utf8

Captain Underpants
--12143381585252692
Content-Disposition: form-data; name=identifier
Content-Type: text/plain; charset=utf8

172/B
--12143381585252692--
```

#### Decoding
With the output (as defined above), we can pass the same to the `.decode()` function and the latent isomorphic
object which we serialized will be returned. 
