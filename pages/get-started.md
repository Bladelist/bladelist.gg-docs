import Callout from 'nextra-theme-docs/callout'

# Get started.

## Our API URL:

```sh
https://api.bladelist.gg
```

<Callout>POST and PUT requests are same, POST is recommanded.</Callout>

## How do i post stuff on the api on my code?

Javascript with node-fetch:

```sh
const fetch = require('node-fetch');
const body = { a: "b", c: "d", e: "f" };

const response = await fetch('https://api.bladelist.gg/api/', {
	method: 'post',
	body: JSON.stringify(body),
	headers: {'Content-Type': 'application/json', 'Authorization': "apiauthkey"}
});

const data = await response.json();
```

Python with requests:

```sh
import requests

def post_stats(id: int, key: str, guilds: int) -> int:
    a = requests.post(f'https://api.bladelist.gg/api/',
        headers={
            "Authorization": key,
            "Content-Type": "application/json"
            },
        json={
            "servercount": guildsno
            })
    return a.status_code
```

## How do i request the api on my code?

Javascript with node-fetch:

```sh
const fetch = require('node-fetch');

const res = fetch(`https://api.bladelist.gg/api/`)
```
Python with requests:

```sh
import requests

requests.get(f'https://api.bladelist.gg/api/')
```